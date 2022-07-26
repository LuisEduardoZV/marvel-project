import { useState } from "react";
import {useParams} from 'react-router-dom';
import { useFetchGetAllCharactersQuery, useFetchGetAllComicsQuery, useFetchGetAllEventsQuery } from "../../api/marvelApi";

import { createHash } from '../../keys';
import Nav from "../../components/Nav";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchList from "./components/SearchList";
import Pagination from "./components/Pagination";

const SearchByOption = () => {

    const {option} = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, ] = useState(20);
    const [offset, setOffset] = useState(0);
    const [ts, ] = useState(5 + Math.random() * (1000 - 5));
    const [hash, ] = useState(createHash(ts));

    const {data: dataCharacter, error: errorCharacter, isLoading: isLoadingCharacter, isFetching: isFetchingCharacter, isSuccess: isSuccessCharacter} = 
        useFetchGetAllCharactersQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'characters' ? false : true});
    const {data: dataComic, error: errorComic, isLoading: isLoadingComic, isFetching: isFetchingComic, isSuccess: isSuccessComic} = 
        useFetchGetAllComicsQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'comics' ? false : true});
    const {data: dataEvent, error: errorEvent, isLoading: isLoadingEvent, isFetching: isFetchingEvent, isSuccess: isSuccessEvent} = 
        useFetchGetAllEventsQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'events' ? false : true});

    const getData = () => {
        if(isSuccessCharacter) return dataCharacter.data;
        else if(isSuccessComic) return dataComic.data;
        else if(isSuccessEvent) return dataEvent.data;
    }

    //Change page
    const onClickPaginate = (buttonSelected) => {
        if(buttonSelected === 'next'){
            setCurrentPage(currentPage+1);
            setOffset(offset+limit);
        }else if(buttonSelected === 'back'){
            setCurrentPage(currentPage-1);
            setOffset(offset-limit);
        }
    }

    const renderContent = () => {
        if(isLoadingCharacter || isLoadingComic || isLoadingEvent || isFetchingCharacter || isFetchingComic || isFetchingEvent){
            return <Loading text="Obteniendo información..."/>;
        }else if((errorCharacter || errorComic || errorEvent) || (dataCharacter?.data?.total === 0 || dataComic?.data?.total === 0 || dataEvent?.data?.total === 0)){
            return <Error text="No info" />;
        }else if(isSuccessCharacter || isSuccessComic || isSuccessEvent){
            const dataGeneral = getData();
            const currentData = dataGeneral?.results;
            const lastPage = dataGeneral?.total/limit;
            const tam = dataGeneral?.count;
            const dataLeft = currentData?.slice(0,tam/2);
            const dataRight = currentData?.slice(tam/2,tam);
            return(
                <>
                    <Pagination currentPage={currentPage} 
                        onClickPaginate={onClickPaginate} 
                        lastPage={lastPage} 
                    />
                    <SearchList dataLeft={dataLeft} dataRight={dataRight}  option={option} />
                </>
            );
        }
    }

    return(
        <div className='flex flex-col w-full h-full bg-white-gray' style={{minHeight: "100vh"}}>
            <Nav />
            {renderContent()}
        </div>
    );
}

export default SearchByOption;
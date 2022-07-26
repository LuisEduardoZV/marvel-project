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
    const [offset, ] = useState(0);
    const [ts, ] = useState(5 + Math.random() * (1000 - 5));
    const [hash, ] = useState(createHash(ts));

    const {data: dataCharacter, error: errorCharacter, isLoading: isLoadingCharacter, idFetching: isFetchingCharacter, isSuccess: isSuccessCharacter} = 
        useFetchGetAllCharactersQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'characters' ? false : true});
    const {data: dataComic, error: errorComic, isLoading: isLoadingComic, idFetching: isFetchingComic, isSuccess: isSuccessComic} = 
        useFetchGetAllComicsQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'comics' ? false : true});
    const {data: dataEvent, error: errorEvent, isLoading: isLoadingEvent, idFetching: isFetchingEvent, isSuccess: isSuccessEvent} = 
        useFetchGetAllEventsQuery({hash: hash, ts: ts, limit: limit, offset: offset}, {skip: option === 'events' ? false : true});

    const getData = () => {
        if(isSuccessCharacter) return dataCharacter?.data;
        else if(isSuccessComic) return dataComic?.data;
        else if(isSuccessEvent) return dataEvent?.data;
    }

    //Change page
    const onClickPaginate = (page) => {
        setCurrentPage(page);
    }

    const renderContent = () => {
        if(isLoadingCharacter || isLoadingComic || isLoadingEvent || isFetchingCharacter || isFetchingComic || isFetchingEvent){
            return <Loading text="Obteniendo información..."/>;
        }else if((errorCharacter || errorComic || errorEvent) || (dataCharacter?.data?.total === 0 || dataComic?.data?.total === 0 || dataEvent?.data?.total === 0)){
            return <Error />;
        }else if(isSuccessCharacter || isSuccessComic || isSuccessEvent){
            const indexOfLastItem = currentPage*limit;
            const indexOfFistItem = indexOfLastItem-limit;
            const generalData = getData();
            const currentData = generalData?.results?.slice(indexOfFistItem, indexOfLastItem);
            return(
                <>
                    <SearchList data={currentData} option={option} />
                    <Pagination itemsPerPage={limit} totalItems={generalData?.total} onClickPaginate={onClickPaginate} />
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
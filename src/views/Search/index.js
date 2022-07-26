import {useParams} from 'react-router-dom';
import {useFetchSearchByCharacterQuery, 
        useFetchSearchByComicQuery, 
        useFetchSearchByEventQuery} from '../../api/marvelApi';
import { createHash } from '../../keys';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Nav from '../../components/Nav';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { useState } from 'react';

const Search = () => {

    const {name, option} = useParams();
    const [ts, ] = useState(5 + Math.random() * (1000 - 5));
    const [hash, ] = useState(createHash(ts));

    const {data: dataCharacter, error: errorCharacter, isLoading: isLoadingCharacter, idFetching: isFetchingCharacter, isSuccess: isSuccessCharacter} = 
        useFetchSearchByCharacterQuery({name: name, hash: hash, ts: ts}, {skip: option === 'characters' ? false : true});
    const {data: dataComic, error: errorComic, isLoading: isLoadingComic, idFetching: isFetchingComic, isSuccess: isSuccessComic} = 
        useFetchSearchByComicQuery({name: name, hash: hash, ts: ts}, {skip: option === 'comics' ? false : true});
    const {data: dataEvent, error: errorEvent, isLoading: isLoadingEvent, idFetching: isFetchingEvent, isSuccess: isSuccessEvent} = 
        useFetchSearchByEventQuery({name: name, hash: hash, ts: ts}, {skip: option === 'events' ? false : true});

    const getDataByOption = () =>{
        if(isSuccessCharacter) return dataCharacter?.data?.results[0];
        else if(isSuccessComic) return dataComic?.data?.results[0];
        else if(isSuccessEvent) return dataEvent?.data?.results[0];
    }

    const renderContent = () => {
        if(isLoadingCharacter || isLoadingComic || isLoadingEvent || isFetchingCharacter || isFetchingComic || isFetchingEvent){
            return <Loading text="Obteniendo información..."/>;
        }else if((errorCharacter || errorComic || errorEvent) || (dataCharacter?.data?.total === 0 || dataComic?.data?.total === 0 || dataEvent?.data?.total === 0)){
            if((dataCharacter?.data?.total === 0 || dataComic?.data?.total === 0 || dataEvent?.data?.total === 0)) 
                return <Error text={`No information was found for the following ${option.slice(0,option.length-1)}: ${name}`} />;
        }else if(isSuccessCharacter || isSuccessComic || isSuccessEvent){
            const datos = getDataByOption();
            const image = datos?.thumbnail;
            return (
                <div className='flex flex-row w-full h-full py-20 px-24 font-rajdhani'>
                    <LeftContainer option={option} image={image} datos={datos} />
                    <RightContainer option={option} datos={datos} />
                </div>
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

export default Search;
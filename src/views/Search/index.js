import {useParams} from 'react-router-dom';
import {useFetchSearchByOptionQuery, useFetchGetDataWithOptionByIdQuery} from '../../api/marvelApi';
import { createHash } from '../../keys';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Nav from '../../components/Nav';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { useState } from 'react';

const Search = () => {

    const {name, option, id} = useParams();
    const [ts, ] = useState(5 + Math.random() * (1000 - 5));
    const [hash, ] = useState(createHash(ts));

    //Fetch when user search by option and name
    const {data, error, isLoading, isFetching, isSuccess} = useFetchSearchByOptionQuery(
                                                {name: name, hash: hash, ts: ts, option: option, searchType: option === "comics" ? "title" : "name"}, 
                                                {skip: id === "info" ? false : true});
    const {data:dataId, error: errorId, isLoading: isLoadingId, isFetching: isFetchingId, isSuccess: isSuccessId} = useFetchGetDataWithOptionByIdQuery(
        {id: id, hash: hash, ts: ts, option: option}, 
        {skip: id !== "info" ? false : true});

    //Fetch when user first search by option and then click in a specific result

    const selectData = () => {
        if(id === "info") return data?.data?.results[0];
        else if(id !== "info") return dataId?.data?.results[0];
    }

    const renderContent = () => {
        if(isLoading || isFetching || isLoadingId || isFetchingId){
            return <Loading text="Obteniendo información..."/>;
        }else if((error || errorId) || (data?.data?.total === 0 || dataId?.data?.total === 0)){
            if(data?.data?.total === 0) 
                return <Error text={`No information was found for the following ${option.slice(0,option.length-1)}: ${name}`} />;
        }else if(isSuccess || isSuccessId){
            const datos = selectData();
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
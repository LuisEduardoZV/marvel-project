import {useParams, useNavigate} from 'react-router-dom';
import {useFetchSearchByOptionQuery, useFetchGetDataWithOptionByIdQuery} from '../../api/marvelApi';
import { createHash } from '../../keys';
import { stilyzeString } from '../../app/recurrentFunctions';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Nav from '../../components/Nav';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { useState } from 'react';
import TitleContainer from './components/TitleContainer';

const Search = () => {

    const {name, option, id} = useParams();
    const [ts, ] = useState(Math.ceil(5 + Math.random() * (1000 - 5)));
    const [hash, ] = useState(createHash(ts));

    const navigate = useNavigate();

    //Fetch when user search by option and name
    const {data, error, isLoading, isFetching, isSuccess} = useFetchSearchByOptionQuery(
                                                {name: name, hash: hash, ts: ts, option: option, searchType: option === "comics" ? "title" : "name"}, 
                                                {skip: id === undefined ? false : true});
    //Fetch when user first search by option and then click in a specific result
    const {data:dataId, error: errorId, isLoading: isLoadingId, isFetching: isFetchingId, isSuccess: isSuccessId} = useFetchGetDataWithOptionByIdQuery(
        {id: id, hash: hash, ts: ts, option: option}, 
        {skip: id !== undefined ? false : true});

    const selectData = () => {
        if(id === undefined) return data?.data?.results[0];
        else if(id !== undefined) return dataId?.data?.results[0];
    }

    const onClickDetailCategory = (category) => {
        navigate(`/search/${option}/${id}/${category}`);
    }

    const onClickItemList = (category, idItem, name) => {
        navigate(`/search/${category}/${stilyzeString(name)}/${idItem}/detail`);
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
                <div className='flex flex-col w-full h-full pt-14 px-24 font-rajdhani'>
                    <TitleContainer datos={datos} option={option} />
                    <div className='flex felx-row w-full h-full'>
                        <LeftContainer image={image} />
                        <RightContainer option={option} datos={datos} id={id} 
                        onClickDetailCategory={onClickDetailCategory}
                        onClickItemList={onClickItemList}/>
                    </div>
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
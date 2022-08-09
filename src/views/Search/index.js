import { useParams, useNavigate } from 'react-router-dom';
import { useFetchSearchByOptionQuery, useFetchGetDataWithOptionByIdQuery } from '../../api/marvelApi';
import { createHash } from '../../keys';
import { stilyzeString } from '../../app/recurrentFunctions';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Nav from '../../components/Nav';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { useState } from 'react';
import TitleContainer from './components/TitleContainer';
import Footer from '../../components/Footer';

const Search = () => {

    const { name, option, id } = useParams();
    const [ts,] = useState(Math.ceil(5 + Math.random() * (1000 - 5)));
    const [hash,] = useState(createHash(ts));

    const navigate = useNavigate();

    //Fetch when user search by option and name
    const { data, error, isLoading, isFetching, isSuccess } = useFetchSearchByOptionQuery(
        { name: name, hash: hash, ts: ts, option: option, searchType: option === "comics" ? "title" : "name" },
        { skip: id === undefined ? false : true });
    //Fetch when user first search by option and then click in a specific result
    const { data: dataId, error: errorId, isLoading: isLoadingId, isFetching: isFetchingId, isSuccess: isSuccessId } = useFetchGetDataWithOptionByIdQuery(
        { id: id, hash: hash, ts: ts, option: option },
        { skip: id !== undefined ? false : true });

    const selectData = () => {
        if (id === undefined) return data;
        else if (id !== undefined) return dataId;
    }

    const onClickDetailCategory = (category) => {
        if(id === undefined){
            const datos = selectData();
            const idSearchResult = datos?.data?.results[0]?.id;
            navigate(`/search/${option}/${idSearchResult}/${category}`);
        }else{
            navigate(`/search/${option}/${id}/${category}`);
        }
    }

    const onClickItemList = (category, idItem, name) => {
        navigate(`/search/${category}/${stilyzeString(name)}/${idItem}/detail`);
    }

    const renderContent = () => {
        if (isLoading || isFetching || isLoadingId || isFetchingId) {
            return <Loading text="Getting information..." />;
        } else if ((error || errorId) || (data?.data?.total === 0 || dataId?.data?.total === 0)) {
            if (data?.data?.total === 0)
                return <Error text={`No information was found for the following ${option.slice(0, option.length - 1)}: ${name}`} />;
        } else if (isSuccess || isSuccessId) {
            const datos = selectData();
            const results = datos?.data?.results[0];
            const image = results?.thumbnail;
            return (
                <>
                    <div className='flex flex-col w-full h-full pt-14 sm:pt-9 px-24 font-rajdhani xl:mb-28 lg:mb-28 md:mb-28 sm:mb-20'>
                        <TitleContainer datos={results} option={option} />
                        <div className='flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col w-full h-full '>
                            <LeftContainer image={image} />
                            <RightContainer option={option} datos={results} id={id}
                                onClickDetailCategory={onClickDetailCategory}
                                onClickItemList={onClickItemList} />
                        </div>
                    </div>
                    <Footer text={datos?.attributionText} />
                </>
            );
        }
    }

    return (
        <div className='flex flex-col w-full h-full bg-white-gray' style={{ minHeight: "100vh" }}>
            <Nav />
            {renderContent()}
        </div>
    );
}

export default Search;
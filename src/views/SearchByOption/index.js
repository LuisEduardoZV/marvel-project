import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {
    useFetchGetAllCharactersQuery,
    useFetchGetAllComicsQuery,
    useFetchGetAllEventsQuery,
    useFetchGetDetailByCategoryOptionAndIdQuery
} from "../../api/marvelApi";

import { createHash } from '../../keys';
import { stilyzeString } from '../../app/recurrentFunctions';
import Nav from "../../components/Nav";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchList from "./components/SearchList";
import Pagination from "./components/Pagination";
import Footer from "../../components/Footer";

const SearchByOption = () => {

    const { option, category, id } = useParams();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [limit,] = useState(20);
    const [offset, setOffset] = useState(0);
    const [ts,] = useState(Math.ceil(5 + Math.random() * (1000 - 5)));
    const [hash,] = useState(createHash(ts));

    const { data: dataCharacter, error: errorCharacter, isLoading: isLoadingCharacter, isFetching: isFetchingCharacter, isSuccess: isSuccessCharacter } =
        useFetchGetAllCharactersQuery({ hash: hash, ts: ts, limit: limit, offset: offset },
            { skip: (option === 'characters' && category === undefined) ? false : true });
    const { data: dataComic, error: errorComic, isLoading: isLoadingComic, isFetching: isFetchingComic, isSuccess: isSuccessComic } =
        useFetchGetAllComicsQuery({ hash: hash, ts: ts, limit: limit, offset: offset },
            { skip: (option === 'comics' && category === undefined) ? false : true });
    const { data: dataEvent, error: errorEvent, isLoading: isLoadingEvent, isFetching: isFetchingEvent, isSuccess: isSuccessEvent } =
        useFetchGetAllEventsQuery({ hash: hash, ts: ts, limit: limit, offset: offset },
            { skip: (option === 'events' && category === undefined) ? false : true });

    const { data: dataId, error: errorId, isLoading: isLoadingId, isFetching: isFetchingId, isSuccess: isSuccessId } =
        useFetchGetDetailByCategoryOptionAndIdQuery({ hash: hash, ts: ts, offset: offset, limit: limit, option: option, id: id, category: category },
            { skip: (category !== undefined && id !== undefined) ? false : true });

    const getData = () => {
        if (isSuccessCharacter) return dataCharacter;
        else if (isSuccessComic) return dataComic;
        else if (isSuccessEvent) return dataEvent;
        else if (category !== undefined && id !== undefined) return dataId;
    }

    //Change page
    const onClickPaginate = (buttonSelected) => {
        if (buttonSelected === 'next') {
            setCurrentPage(currentPage + 1);
            setOffset(offset + limit);
        } else if (buttonSelected === 'back') {
            setCurrentPage(currentPage - 1);
            setOffset(offset - limit);
        }
    }

    const onClickItem = (name, id) => {
        if (category === undefined)
            navigate(`/search/${option}/${stilyzeString(name)}/${id}/detail`);
        else navigate(`/search/${category}/${stilyzeString(name)}/${id}/detail`);
    }

    const renderContent = () => {
        if (isLoadingCharacter || isLoadingComic || isLoadingEvent || isLoadingId || isFetchingCharacter || isFetchingComic || isFetchingEvent || isFetchingId) {
            return <Loading text="Getting information..." />;
        } else if ((errorCharacter || errorComic || errorEvent || errorId) || (dataCharacter?.data?.total === 0 || dataComic?.data?.total === 0 || dataEvent?.data?.total === 0 || dataId?.data?.total === 0)) {
            return <Error text="No data" />;
        } else if (isSuccessCharacter || isSuccessComic || isSuccessEvent || isSuccessId) {
            const response = getData();
            const dataGeneral = response.data;
            const currentData = dataGeneral?.results;
            const lastPage = Math.ceil(dataGeneral?.total / limit);
            return (
                <>
                    {
                        /*isSuccessId && <div>
                           <p>{`${category}`}</p>
                       </div>*/
                    }
                    {
                        lastPage !== 1 && <Pagination currentPage={currentPage}
                            onClickPaginate={onClickPaginate}
                            lastPage={lastPage}
                        />
                    }
                    <SearchList datos={currentData}
                        option={category === undefined ? option : category}
                        onClickItem={onClickItem} />
                    <Footer text={response?.attributionText} />
                </>
            );
        }
    }

    return (
        <div className='flex flex-col w-auto h-full bg-white-gray' style={{ minHeight: "100vh" }}>
            <Nav />
            {renderContent()}
        </div>
    );
}

export default SearchByOption;
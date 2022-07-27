import { useFetchGetDetailByCategoryOptionAndIdQuery } from "../../api/marvelApi";
import { useParams } from 'react-router-dom';

const DetailSearch = () => {

    const [data, error, isLoading, isFetching, isSuccess] = useFetchGetDetailByCategoryOptionAndIdQuery();

    return(
        <div>
            DetailSearch
        </div>
    );
}

export default DetailSearch;
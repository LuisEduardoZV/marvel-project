import {useParams} from 'react-router-dom';

const Search = () => {

    const {option, name} = useParams();

    return(
        <div>Busqueda de {option}: {name}</div>
    );
}

export default Search;
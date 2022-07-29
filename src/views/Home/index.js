import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InformationHome from './components/InformationHome';
import SearchBox from './components/SearchBox';
import './index.css';

const Home = () => {

    const [search, setSearch] = useState("");
    const [option, setOption] = useState("");

    const navigate = useNavigate();

    const handleSearchInput = ({target: {value}}) => {
        setSearch(value);
    }

    const handleOptionSelected = ({target: {value}}) => {
        setOption(value.trim());
    }

    const handleSearch = () => {
        if(!(search === "") && !(option === "")) navigate(`/search/${option}/${search}/detail`);
        else if(!(option === "")) navigate(`/search/${option}`);
        else alert("Please select at least one search option.");
    }

    return(
        <div className="flex bg-fondo-inicio w-full h-full object-cover bg-cover bg-top flex-col items-center">
            <InformationHome />
            <SearchBox option={option} search={search} 
            onOptionSelected={handleOptionSelected} 
            onSearch={handleSearch} 
            onChangeInputSearch={handleSearchInput} />
        </div>
    );
}

export default Home;
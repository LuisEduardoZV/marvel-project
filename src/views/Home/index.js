import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        if(!(search === "") && !(option === "")) navigate(`/search/${option}/${search}`);
        else alert("Ingrese todos los datos para hacer la busqueda");
    }

    return(
        <div className="flex bg-fondo-inicio w-full h-full object-cover bg-cover bg-top flex-col items-center">
            <div className="flex drop-shadow-2xl w-3/4 bg-marvel-red-100 h-48 rounded-lg items-center justify-center flex-col"
            style={{marginTop: "650px"}}>
                <p className="font-rajdhani font-light text-white text-3xl">
                    En este proyecto podrán buscar todo lo relacionado con Marvel; personajes, eventos, comics, creadores, series o cualquier información relacionada. 
                </p>
                <a className="outline-none" href="#div-search">
                    <button className="bg-marvel-vino-80 font-rajdhani font-light 
                    text-white text-xl p-2 rounded-md mt-5 w-36 hover:bg-marvel-vino-100">
                        Buscar
                    </button>
                </a>
            </div>
            <div id="div-search" className="flex flex-col bg-white-gray drop-shadow-2xl rounded-xl mb-24 h-52 w-8/12 items-center" style={{marginTop: "2050px"}}>
                <h2 className="mt-8 font-rajdhani font-semibold text-5xl mb-10">Buscar creador, comic o personaje...</h2>
                <div className="radio-group flex flex-row items-center justify-center rounded">
                    <div className={`pr-3 hover:cursor-pointer font-rajdhani pt-1 text-white 
                    ${option.includes("personaje") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} 
                    style={{borderTopLeftRadius: "5px 5px", borderBottomLeftRadius: "5px 5px"}}>
                        <input id="personaje" type="radio" className="hover:cursor-pointer" name="personaje" value="personaje" 
                         checked={option} onChange={handleOptionSelected}/>
                        <label htmlFor="personaje" className='hover:cursor-pointer'>Personaje</label>
                    </div>
                    <div className={`pr-3 hover:cursor-pointer font-rajdhani pt-1 text-white 
                    ${option.includes("comic") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} >
                        <input id="comic" type="radio" className="" name="comic" value="comic" 
                        checked={option} onChange={handleOptionSelected} />
                        <label htmlFor="comic" className='hover:cursor-pointer'>Cómic</label>
                    </div>
                    <div className={`pr-3 hover:cursor-pointer font-rajdhani pt-1 text-white 
                    ${option.includes("creador") ? 'font-bold bg-marvel-red-90' : 'font-light bg-marvel-red-70'}`} >
                        <input id="creador" type="radio" className="" name="creador" value="creador" 
                        checked={option} onChange={handleOptionSelected} />
                        <label htmlFor="creador" className='hover:cursor-pointer'>Creador</label>
                    </div>
                    <div>
                        <input type="text" className='bg-bg-input-gray w-52 pl-3 outline-none font-rajdhani font-bold pt-1' 
                        value={search} onChange={handleSearchInput} 
                        style={{borderTopRightRadius: "5px 5px", borderBottomRightRadius: "5px 5px"}} required/>
                    </div>
                    <div>
                        <button className='ml-14 font-rajdhani bg-marvel-vino-80 text-white p-1 rounded-xl w-20
                        hover:bg-marvel-vino-100' onClick={handleSearch}>Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
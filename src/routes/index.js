import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import SearchByOption from "../views/SearchByOption";
import DetailSearch from '../views/DetailSearch';

const RutasProyecto = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/search/:option" element={ <SearchByOption /> } />
                <Route path="/search/:option/:name/:id" element={ <Search /> } />
                <Route path="/search/:category/:id/:option/detail" element={ <DetailSearch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RutasProyecto;
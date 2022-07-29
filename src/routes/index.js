import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import SearchByOption from "../views/SearchByOption";

const RutasProyecto = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/search/:option" element={ <SearchByOption /> } />
                <Route path="/search/:option/:id/:category" element={ <SearchByOption />} />
                <Route path="/search/:option/:name/detail" element={ <Search/> } />
                <Route path="/search/:option/:name/:id/detail" element={ <Search /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RutasProyecto;
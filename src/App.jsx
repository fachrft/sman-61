import { Route, Routes } from "react-router-dom";
import Home from './Elements/Home'
import Pengurus from "./Elements/Pengurus";
import AllFotografi from "./Elements/AllFotografi";
import AllPojokKarya from "./Elements/AllPojokKarya";
import AllArtikel from "./Elements/AllArtikel";
import AllMajalah from "./Elements/AllMajalah";
import ArtikelSlide from "./Elements/ArtikelSlide";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/all-fotografi" element={<AllFotografi />}></Route>
            <Route path="/all-pojok-karya" element={<AllPojokKarya />}></Route>
            <Route path="/all-artikel" element={<AllArtikel/>}></Route>
            <Route path="/all-majalah" element={<AllMajalah/>}></Route>
            <Route path="/all-artikel/artikel-slide" element={<ArtikelSlide/>}></Route>
            <Route path="/pengurus" element={<Pengurus/>}></Route>
        </Routes>
    );
};

export default App;

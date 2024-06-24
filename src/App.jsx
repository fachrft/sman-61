import { Route, Routes } from "react-router-dom";
import Home from "./Elements/Home";
import Pengurus from "./Elements/Pengurus";

import AllFotografi from "./Elements/AllFotografi";
import AllFotografi19Kom from "./Elements/AllFotografi19Kom";
import AllFotografi19Uph from "./Elements/AllFotografi19Uph";
import AllFotografi22Ali from "./Elements/AllFotografi22Ali";
import AllFotografi22Ng from "./Elements/AllFotografi22Ng";
import AllFotografi22Ptm from "./Elements/Allfotografi22Ptm";

import AllPojokKarya from "./Elements/AllPojokKarya";
import AllArtikel from "./Elements/AllArtikel";
import AllMajalah from "./Elements/AllMajalah";
import ArtikelSlide from "./Elements/ArtikelSlide";
import AllMajalahVol6 from "./Elements/AllMajalahVol6";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/all-fotografi" element={<AllFotografi />}></Route>
            <Route path="/all-fotografi/19kom" element={<AllFotografi19Kom />}></Route>
            <Route path="/all-fotografi/19uph" element={<AllFotografi19Uph />}></Route>
            <Route path="/all-fotografi/22ali" element={<AllFotografi22Ali />}></Route>
            <Route path="/all-fotografi/22ng" element={<AllFotografi22Ng />}></Route>
            <Route path="/all-fotografi/22ptm" element={<AllFotografi22Ptm />}></Route>

            <Route path="/all-pojok-karya" element={<AllPojokKarya />}></Route>

            <Route path="/all-artikel" element={<AllArtikel />}></Route>
            <Route path="/all-artikel/artikel-slide" element={<ArtikelSlide />}></Route>

            <Route path="/all-majalah" element={<AllMajalah />}></Route>
            <Route path="/all-majalah/vol-6" element={<AllMajalahVol6 />}></Route>

            <Route path="/pengurus" element={<Pengurus />}></Route>
        </Routes>
    );
};

export default App;

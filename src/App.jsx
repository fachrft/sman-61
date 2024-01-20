import { Route, Routes } from "react-router-dom";
import Home from './Elements/Home'
import Login from "./Elements/Login";
import Upload from "./Elements/Upload";
import UploadFotografi from "./Elements/UploadFotografi";
import UploadPojokKarya from "./Elements/UploadPojokKarya";
import UploadArtikel from "./Elements/UploadArtikel";
import UploadMajalah from "./Elements/UploadMajalah";
import Pengurus from "./Elements/Pengurus";
import AllFotografi from "./Elements/AllFotografi";
import AllPojokKarya from "./Elements/AllPojokKarya";
import AllMajalah from "./Elements/AllMajalah";
import AllArtikel from "./Elements/AllArtikel";
import ArtikelSlide from "./Elements/ArtikelSlide";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload/>}></Route>
            <Route path="/upload/fotografi" element={<UploadFotografi/>}></Route>
            <Route path="/upload/pojok-karya" element={<UploadPojokKarya/>}></Route>
            <Route path="/upload/artikel" element={<UploadArtikel/>}></Route>
            <Route path="/upload/nasa-magz" element={<UploadMajalah/>}></Route>
            <Route path="/all-fotografi" element={<AllFotografi />}></Route>
            <Route path="/all-pojok-karya" element={<AllPojokKarya />}></Route>
            <Route path="/all-majalah" element={<AllMajalah/>}></Route>
            <Route path="/all-artikel" element={<AllArtikel/>}></Route>
            <Route path="/all-artikel/artikel-slide" element={<ArtikelSlide/>}></Route>
            <Route path="/pengurus" element={<Pengurus/>}></Route>
        </Routes>
    );
};

export default App;

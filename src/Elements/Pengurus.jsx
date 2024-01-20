import CardPengurus from "../Fragments/CardPengurus";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import nasaPers from "../assets/Nasa-pers.png";
import Footer from "../Fragments/Footer";
import "../css/style.css";

// BPH
import Kaisah from '../assets/Pengurus/Kaisah Audrey Giasanni - Sekretaris 2.png';
import Keysha from '../assets/Pengurus/Keysha Camilla Nurmadina — Ketua Videografi_.jpg'
import Khayra from '../assets/Pengurus/Khayra Dayyinah Tazki - Sekretaris 1.png'
import Putry from '../assets/Pengurus/Putry Ana Suryaningsih_.png'
import Najwa from '../assets/Pengurus/Najwa Ramadhani K. - Wakil Ketua.png'
import Sheza from '../assets/Pengurus/Sheza Atiya Umri Nasution.jpg'

// Humas
import Dzikria from '../assets/Pengurus/Dzikria Amany.jpg'
import Rachma from '../assets/Pengurus/Rachma Dara Tresyanti.jpg'
import Tsania from '../assets/Pengurus/Tsania Khoirun Nisa.jpg'

// Jurnal
import Ardhya from '../assets/Pengurus/ARDHYA FALISHA PUTRI - ANGGOTA 3 JURNALISTIK.png'
import Lintang from '../assets/Pengurus/Lintang Aulia Febrini - ketua jurnalistik.jpg'
import Tazia from '../assets/Pengurus/Tazia Elvaretta - Anggota Jurnalistik.jpg'

// Sinema
import Andhika from '../assets/Pengurus/Andhika Wiguna - fotgraf.jpg'
import Naila from '../assets/Pengurus/Naila Fitria - Anggota Fotgraf.jpg'

// Design 
import Moniq from '../assets/Pengurus/Moniq Desdemona Aziza.png'


const Pengurus = () => {
    return (
        <div className="bg-pengurus">
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex flex-col justify-center items-center pt-16 mb-12">
                <div>
                    <img src={logoFooter} alt="" />
                </div>
                <div>
                    <img src={nasaPers} alt="" />
                </div>
            </div>
            {/* BADAN PENGURUS HARIAN */}
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Badang Pengurus Harian</h1>
                </div>
            </div>
            <div>
                {/* KETUA & WAKIL  */}
                <CardPengurus 
                gambar1={Keysha} nama1="Keysha Camilla Nurmadina" role1="Ketua Videografi" 
                gambar2={Najwa} nama2="Najwa Ramadhani K." role2="Wakil Ketua"
                />
            </div>
            <div>
                {/* SEKERTARIS */}
                <CardPengurus 
                gambar1={Khayra} nama1="Khayra Dayyinah Tazki" role1="Sekertaris 1" 
                gambar2={Kaisah} nama2="Kaisah Audrey Giasanni" role2="Sekertaris 2"
                />
            </div>
            <div>
                {/* SEKERTARIS */}
                <CardPengurus 
                gambar1={Putry} nama1="Putry Ana Suryaningsih" role1="Sekertaris 1" 
                gambar2={Sheza} nama2="Sheza Atiya Umri Nasution" role2="Sekertaris 2"
                />
            </div>
            {/* Humas */}
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Humas</h1>
                </div>
            </div>
            <div>
                {/* KETUA  */}
                <CardPengurus 
                gambar1={Putry} nama1="Putry ana Suryaningsih" role1="Ketua Humas" 
                gambar2={Dzikria} nama2="Dzikria Amany" role2="Anggota"
                />
            </div>
            <div>
                {/* Anggota */}
                <CardPengurus 
                gambar1={Rachma} nama1="Rachma Dara Tresyanti" role1="Anggota" 
                gambar2={Tsania} nama2="Tsania Khoirun Nisa" role2="Anggota"
                />
            </div>
            {/* Jurnal */}
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Jurnal</h1>
                </div>
            </div>
            <div>
                {/* Anggota */}
                <CardPengurus 
                gambar1={Lintang} nama1="Lintang Aulia Febrini" role1="Ketua Jurnalistik"
                />
            </div>
            <div>
                {/* Anggota */}
                <CardPengurus 
                gambar1={Tazia} nama1="Tazia Elvaretta" role1="Anggota Jurnalistik" 
                gambar2={Ardhya} nama2="Ardhya Falisa Putri" role2="Anggota 3 Jurnalistik" 
                />
            </div>
            {/* Sinema */}
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Sinema</h1>
                </div>
            </div>
            <div>
                {/* Ketua */}
                <CardPengurus 
                gambar1={Keysha} nama1="Keysha Camilla Nurmadina" role1="Ketua Videografi"
                />
            </div>
            <div>
                {/* Anggota */}
                <CardPengurus 
                gambar1={Andhika} nama1="Andhika Wiguna" role1="Anggota Fotografi" 
                gambar2={Naila} nama2="Naila Fitria" role2="Anggota Fotografi" 
                />
            </div>
            {/* Design */}
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Design</h1>
                </div>
            </div>
            <div>
                {/* Ketua */}
                <CardPengurus 
                gambar1={Moniq} nama1="Moniq Desdemona Aziza" role1="Design"
                />
            </div>
            <div className="pt-24 pb-5">
                <Footer />
            </div>
        </div>
    );
};

export default Pengurus;

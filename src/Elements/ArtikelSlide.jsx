import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import nasaPers from "../assets/Nasa-pers.png";
// import ChooseTahunMajalah from "../Fragments/ChooseTahunMajalah";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Footer from "../Fragments/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ArtikelSlide = () => {
    const [majalah, setMajalah] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");

    useEffect(() => {
        refreshToken();
        getArtikelSlide();
    }, []);

    const getArtikelSlide = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/artikel");
            setMajalah(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            setToken(response.data.accessToken);
            const decode = jwtDecode(response.data.accessToken);
            setExpire(decode.exp);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const currenDate = new Date();
            if (expire * 1000 < currenDate.getTime()) {
                const response = await axios.get("https://sman-61-server.vercel.app/token");
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                setToken(response.data.accessToken);
                const decoded = jwtDecode(response.data.accessToken);
                setExpire(decoded.exp);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const handleDeleteClick = async (event) => {
        try {
            const fotoId = event.currentTarget.dataset.id;
            const response = await axiosJWT.delete(`https://sman-61-server.vercel.app/artikel/${fotoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(response.data.pesan)
            getArtikelSlide();
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };
    return (
        <div className="bg-pengurus">
            <div className="pt-5 flex">
                <Link to="/all-artikel">
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
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Artikel</h1>
                </div>
            </div>
            <div className="px-5 mb-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="cardmajalah-swiper"
                >
                    {majalah
                        .map((magz, i) => (
                            <SwiperSlide key={i} className="relative">
                                {isLoggedIn && (
                                    <div onClick={handleDeleteClick} data-id={magz.id} className="bg-red-500 w-10 h-9 text-center rounded-full absolute top-3 right-7 z-10">
                                        <h1 className="text-xl">X</h1>
                                    </div>
                                )}
                                <img className="w-[317px] h-[449px]" src={magz.foto} alt="" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="pt-44">
                <Footer />
            </div>
        </div>
    );
};

export default ArtikelSlide;

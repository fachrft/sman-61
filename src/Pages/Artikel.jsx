import { Swiper, SwiperSlide } from "swiper/react";

import { useState, useEffect } from "react";
import axios from "axios";
// import Button from "../Fragments/Button";
import panah from "../assets/Panah.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Artikel = () => {
    const [artikel, setArtikel] = useState([]);
    useEffect(() => {
        getArtikel();
    }, []);

    const getArtikel = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/artikel");
            setArtikel(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getTahun = (data) => {
        const fullYear = new Date(data);
        const year = fullYear.getFullYear();
        const month = fullYear.getMonth() + 1;
        const day = fullYear.getDate();
        const formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
        return formattedDate;
    };

    const motongText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "...";
        }
    };
    return (
        <div className="px-5 mb-10 pt-44">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="cardArtikel-swiper"
            >
                {artikel.map((art, i) => (
                    <SwiperSlide key={i} className="relative">
                        <div className="relative">
                            <div>
                                <img className="w-[324px] h-[216px]" src={art.foto} alt="" />
                            </div>
                            <div className="absolute bottom-5 px-5">
                                <div>
                                    <h1 className="font-semibold text-yellow-300">{motongText(art.keterangan, 90)}</h1>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold text-white">{getTahun(art.createdAt)}</p>
                                </div>
                                <Link to='/all-artikel'>
                                    <div className="gap-3 py-1 px-2 bg-bg-color rounded-2xl w-32 flex justify-between items-center">
                                        <h1 className="font-semibold text-xs text-white">Lebih Lanjut</h1>
                                        <img className="w-1.5" src={panah} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Artikel;

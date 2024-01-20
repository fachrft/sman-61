// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import CardSwiperCard from "../Fragments/CardSwiperCard";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/swiper.css";
import "../css/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

const PojokKarya = () => {
    const [pojokKarya, setPojokKarya] = useState([]);

    useEffect(() => {
        getAllPojokKarya();
    }, []);

    const getAllPojokKarya = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/pojok_karya");
            setPojokKarya(response.data);
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
        return formattedDate
    };

    return (
        <div className="pt-44">
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-10">
                    <h1 className="badan-pengurus text-3xl text-white">Pojok Karya</h1>
                </div>
            </div>
            <div>
                <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {pojokKarya.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <CardSwiperCard image={card.foto} isi={getTahun(card.createdAt)} tujuan="all-pojok-karya" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default PojokKarya;

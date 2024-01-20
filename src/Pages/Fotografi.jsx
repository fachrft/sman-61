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

const Fotografi = () => {
    const [fotografi, setFotografi] = useState([]);

    useEffect(() => {
        getAllFotografi();
    }, []);

    const getAllFotografi = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/gallery");
            setFotografi(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const motongText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + '...';
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-10">
                    <h1 className="badan-pengurus text-3xl text-white">Fotografi</h1>
                </div>
            </div>
            <div>
                <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {fotografi.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <CardSwiperCard image={card.foto} isi={motongText(card.keterangan, 100)} tujuan="/all-fotografi"/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Fotografi;

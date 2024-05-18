// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DataFotografi } from "../data/Fotografi.js";
import CardSwiperCard from "../Fragments/CardSwiperCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/swiper.css";
import "../css/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

const Fotografi = () => {
    
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
                    {DataFotografi.map((card) => {
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

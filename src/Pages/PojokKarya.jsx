// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DataPojokKarya } from "../data/PojokKarya";
import CardSwiperCard from "../Fragments/CardSwiperCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/swiper.css";
import "../css/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

const PojokKarya = () => {
    
    return (
        <div className="pt-44">
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-10">
                    <h1 className="badan-pengurus text-3xl text-white">Pojok Karya</h1>
                </div>
            </div>
            <div>
                <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {DataPojokKarya.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <CardSwiperCard image={card.foto} tujuan="all-pojok-karya" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default PojokKarya;

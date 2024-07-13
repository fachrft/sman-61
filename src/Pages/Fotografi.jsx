import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardSwiperCard from "../Fragments/CardSwiperCard";
import { Fotografi19Kom } from "../data/Fotografi19Kom.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/swiper.css";
import "../css/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

// Fungsi untuk menghasilkan array angka acak
const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
};

const Fotografi = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);

    useEffect(() => {
        const randomIndices = getRandomIndices(Fotografi19Kom.length, 10);
        const selectedPhotos = randomIndices.map(index => {
            const randomNumber = Math.floor(Math.random() * 65) + 1; // Angka acak antara 1 dan 100
            return {
                ...Fotografi19Kom[index],
                foto: `/fotografi/19KOM (${randomNumber}).JPG`
            };
        });
        setRandomPhotos(selectedPhotos);
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-10">
                    <h1 className="badan-pengurus text-3xl text-white">Fotografi</h1>
                </div>
            </div>
            <div>
                <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {randomPhotos.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <CardSwiperCard image={card.foto} tujuan="/all-fotografi"/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Fotografi;

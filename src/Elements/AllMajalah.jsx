import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import nasaPers from "../assets/Nasa-pers.png";
import { DataMajalah } from "../data/Majalah";
import Footer from "../Fragments/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const AllMajalah = () => {
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
            <div className="flex justify-center items-center mb-8">
                <div className="bg-bg-color px-2 py-1 rounded-xl">
                    <h1 className="badan-pengurus text-base text-pengurus">Majalah</h1>
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
                    {DataMajalah.map((magz, i) => (
                        <SwiperSlide key={i} className="relative">
                            <a href={magz.link}>
                                <img className="w-[317px] h-[449px]" src={magz.foto} alt="" />
                            </a>
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

export default AllMajalah;

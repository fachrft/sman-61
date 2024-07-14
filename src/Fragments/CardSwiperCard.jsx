import panah from "../assets/Panah.png";
import { Link } from "react-router-dom";

const CardSwiperCard = (props) => {
    const { image, isi, tujuan } = props;
    return (
        <div className="px-14 relative">
            <div className="w-[288px] h-[418px]">
                <img className="w-[288px] h-[418px] rounded-3xl bg-cover bg-no-repeat bg-center" src={image} alt="" />
            </div>
            <div className="absolute bottom-10 w-60">
                <div className="mb-5 pl-6">
                    <h1 className="font-normal text-base">{isi}</h1>
                </div>
                <div>
                    <Link to={tujuan}>
                        <div className="mx-5">
                            <div className="px-[20px] w-44 bg-bg-color py-[5px] rounded-2xl h-10 flex justify-between items-center">
                                <h1 className="text-white font-normal text-base">Lebih Lanjut</h1>
                                <img src={panah} alt="" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardSwiperCard;

import cardKiri from "../assets/Card-Kiri.png";
import cardKanan from "../assets/Card-kanan.png";

const CardPengurus = (props) => {
    const { gambar1, nama1, role1, gambar2, nama2, role2 } = props;

    return (
        <div className="flex justify-center">
            <div className="relative flex justify-center items-center">
                <div className="">
                    <img className="" src={cardKiri} alt="" />
                </div>
                <div className="absolute top-0 flex flex-col items-center justify-center z-10">
                    <div className="">
                        <img className="w-14 h-[70px] rounded-full" src={gambar1} alt="" />
                    </div>
                    <div className="text-center pt-2">
                        <h1 className="font-semibold text-[12px]">{nama1}</h1>
                        <p className="text-[10px]">{role1}</p>
                    </div>
                </div>
            </div>
            {gambar2 && (
                <div className="relative flex justify-center items-center">
                    <div className="">
                        <img className="" src={cardKanan} alt="" />
                    </div>
                    <div className="absolute top-0 flex flex-col items-center justify-center z-10">
                        <div>
                            <img className="w-14 h-[70px] rounded-full" src={gambar2} alt="" />
                        </div>
                        <div className="text-center pt-2">
                            <h1 className="font-semibold text-[12px]">{nama2}</h1>
                            <p className="text-[10px]">{role2}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardPengurus;

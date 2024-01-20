import handphone from "../assets/nasa-handphone.png";
import { Link } from "react-router-dom";

const Handphone = () => {
    return (
        <div className="pt-20">
            <div className="flex justify-center gap-5 px-6">
                <Link to='https://www.instagram.com/nasa.pers/'>
                    <div>
                        <img className="w-44" src={handphone} alt="" />
                    </div>
                </Link>
                <div className="flex flex-col pt-10 text-end ">
                    <h1 className="font-semibold text-tahun-ganjil text-lg">Cek Instagram Kami</h1>
                    <p className="font-semibold text-tahun-ganjil text-xs">Untuk mengetahui konten pers 61 secara lebih lanjut!!</p>
                    <div className="h-0.5 bg-sky-700 ml-12 mt-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Handphone;

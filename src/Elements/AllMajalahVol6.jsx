import "../css/style.css";
import { MajalahVol6 } from "../data/MajalahVol6";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const AllMajalahVol6 = () => {
    return (
        <div className="bg-pengurus" style={{ height: "auto" }}>
            <div className="pt-5 flex">
                <Link to="/all-majalah">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">Majalah Vol 6</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 flex-wrap">
                {MajalahVol6.map((foto) => (
                    <div key={foto.id} className="image-container cursor-pointer relative">
                        <img className="w-[283px] h-[345px]" src={foto.foto} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMajalahVol6;

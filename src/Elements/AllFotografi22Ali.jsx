import "../css/style.css";
import { Fotografi22Ali } from "../data/Fotografi22Ali";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const AllFotografi22Ali = () => {
    return (
        <div className="bg-pengurus" style={{ height: Fotografi22Ali.length <= 6 ? "100vh" : "auto" }}>
            <div className="pt-5 flex">
                <Link to="/all-fotografi">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">22 - ALI</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap">
                {Fotografi22Ali.map((foto) => (
                    <div key={foto.id} className="image-container cursor-pointer relative">
                        <img className="w-[173px] h-[165px]" src={foto.foto} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFotografi22Ali;

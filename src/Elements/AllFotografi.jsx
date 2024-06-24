import "../css/style.css";
import { DataFotografi } from "../data/Fotografi";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const AllFotografi = () => {
    return (
        <div className="bg-pengurus" style={{ height: DataFotografi.length <= 6 ? "100vh" : "auto" }}>
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">Fotografi</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap">
                {DataFotografi.map((foto) => (
                    <a href={foto.link} key={foto.id}>
                        <div className="image-container bg-bg-color flex justify-center items-center w-44 h-44 cursor-pointer relative">
                            <p className="text-3xl font-semibold text-white">{foto.keterangan}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AllFotografi;

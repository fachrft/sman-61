import "../css/style.css";
import { DataFotografi } from "../data/Fotografi";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const AllFotografi = () => {

    const motongText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "...";
        }
    };

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
                    <div key={foto.id} className="image-container cursor-pointer relative">
                        <img className="w-[173px] h-[165px]" src={foto.foto} alt="" />
                        <p className="overlay text-sm px-3">{motongText(foto.keterangan, 120)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFotografi;

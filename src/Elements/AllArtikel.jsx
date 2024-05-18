import { DataArtikel } from "../data/Artikel";
import { Link } from "react-router-dom";
import "../css/style.css";
import Button from "../Fragments/Button";

const AllArtikel = () => {

    const motongText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "...";
        }
    };

    return (
        <div className="bg-pengurus" style={{ height: DataArtikel.length <= 6 ? "100vh" : "auto" }}>
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">Artikel</h1>
                </div>
            </div>
            <Link to='artikel-slide'>
                <div className="flex justify-center items-center gap-3 flex-wrap">
                    {DataArtikel.map((foto) => (
                        <div key={foto.id} className="image-container cursor-pointer relative">
                            <img className="w-[173px] h-[165px]" src={foto.foto} alt="" />
                            <p className="overlay text-sm px-3">{motongText(foto.keterangan, 120)}</p>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default AllArtikel;

import "../css/style.css";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const  IsiFotografi = (props) => {
    const {judul, data} = props
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (foto) => {
        setSelectedImage(foto);
    };

    const handleBackgroundClick = () => {
        setSelectedImage(null);
    };
    return (
        <div className="bg-pengurus" style={{ height: data.length <= 6 ? "100vh" : "auto" }}>
            <div className="pt-5 flex">
                <Link to="/all-fotografi">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">{judul}</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap">
            {data.map((foto) => (
                <div key={foto.id} className="image-container cursor-pointer relative">
                    <img 
                        className="w-[173px] h-[165px]" 
                        src={foto.foto} 
                        alt="" 
                        onClick={() => handleImageClick(foto)}
                    />
                </div>
            ))}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleBackgroundClick}
                >
                    <img 
                        className="max-w-full max-h-full px-5"
                        src={selectedImage.foto} 
                        alt="" 
                    />
                </div>
            )}
        </div>
        </div>
    );
};

export default IsiFotografi;

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const AllPojokKarya = () => {
    const [pojokKarya, setPojokKarya] = useState([]);

    useEffect(() => {
        getAllPojokKarya();
    }, []);

    const getAllPojokKarya = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/pojok_karya");
            setPojokKarya(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-pengurus" style={{ height: pojokKarya.length <= 6 ? "100vh" : "auto" }}>
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex justify-center items-center mb-8 pt-10">
                <div className="bg-bg-color px-4 py-2 rounded-xl mb-8">
                    <h1 className="badan-pengurus text-3xl text-white">PojokKarya</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap">
                {pojokKarya.map((foto) => (
                    <div key={foto.id}>
                        <img className="w-[173px] h-[165px]" src={foto.foto} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPojokKarya;

import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import "../css/style.css";
import Button from "../Fragments/Button";

const AllArtikel = () => {
    const [artikel, setArtikel] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");

    useEffect(() => {
        getAllArtikel();
        refreshToken();
    }, []);

    const getAllArtikel = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/artikel");
            setArtikel(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            setToken(response.data.accessToken);
            const decode = jwtDecode(response.data.accessToken);
            setExpire(decode.exp);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    const motongText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "...";
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const currenDate = new Date();
            if (expire * 1000 < currenDate.getTime()) {
                const response = await axios.get("https://sman-61-server.vercel.app/token");
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                setToken(response.data.accessToken);
                const decoded = jwtDecode(response.data.accessToken);
                setExpire(decoded.exp);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const handleDeleteClick = async (event) => {
        try {
            const fotoId = event.currentTarget.dataset.id;
            const response = await axiosJWT.delete(`https://sman-61-server.vercel.app/artikel/${fotoId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(response.data.pesan)
            getAllArtikel();
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };

    return (
        <div className="bg-pengurus" style={{ height: artikel.length <= 6 ? "100vh" : "auto" }}>
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
                    {artikel.map((foto) => (
                        <div key={foto.uuid} className="image-container cursor-pointer relative">
                            {isLoggedIn && (
                                <div onClick={handleDeleteClick} data-id={foto.id} className="bg-red-500 w-4 text-center rounded-full absolute top-1 right-2 z-10">
                                    <h1 className="text-xs">X</h1>
                                </div>
                            )}
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

import "../css/style.css";
import artikel from "../assets/Artikel.png";
import artikelText from "../assets/Artikel-text.png";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import FormSelectFile from "../Fragments/FormSelectFile";
import InputForm from "../Fragments/InputForm";
import pesawat from "../assets/pesawat.png";
import Footer from "../Fragments/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UploadArtikel = () => {
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            setToken(response.data.accessToken)
            const decode = jwtDecode(response.data.accessToken)
            setExpire(decode.exp)
        } catch (error) {
            if (error.response) {
                window.location.href = "/";
            }
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

    const uploadArtikel = async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("foto", e.target.foto.files[0]);
            formData.append("keterangan", e.target.keterangan.value);

            const response = await axiosJWT.post("https://sman-61-server.vercel.app/artikel", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            alert(response.data.status);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="background">
            <div className="pt-5 flex">
                <Link to="/upload">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 pt-14">
                <div>
                    <img src={artikel} alt="" />
                </div>
                <div className="translate-x-12">
                    <img src={artikelText} alt="" />
                </div>
            </div>
            <form className="px-4 pt-10 flex flex-col justify-center gap-5 mb-44" action="" onSubmit={uploadArtikel}>
                <FormSelectFile />
                <InputForm name="keterangan" label="Keterangan" placeholder="Tuliskan keterangan.." type="text" />
                <button className="text-white flex justify-center gap-3 items-center bg-button-file w-40 py-3 rounded-xl font-semibold text-2xl" type="submit">
                    Kirim
                    <img src={pesawat} alt="" />
                </button>
            </form>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default UploadArtikel;

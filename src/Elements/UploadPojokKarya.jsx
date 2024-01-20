import "../css/style.css";
import pojokKarya from '../assets/pojok-karya.png'
import pojokKaryaText from '../assets/pojok-karya-text.png'
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import FormSelectFile from "../Fragments/FormSelectFile";
import pesawat from "../assets/pesawat.png";
import Footer from "../Fragments/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UploadPojokKarya = () => {
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

    const uploadFoto = async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("foto", e.target.foto.files[0]);

            const response = await axiosJWT.post("https://sman-61-server.vercel.app/pojok_karya", formData, {
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
            <div className="flex flex-col pt-16 justify-center items-center">
                <div>
                    <img src={pojokKarya} alt="" />
                </div>
                <div>
                    <img src={pojokKaryaText} alt="" />
                </div>
            </div>
            <form className="px-4 pt-10 flex flex-col justify-center gap-5 mb-44" action="" onSubmit={uploadFoto}>
                <FormSelectFile/>
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

export default UploadPojokKarya;

import "../css/style.css";
import nasamagz from "../assets/nasamagz.png";
import nasamagzText from "../assets/nasamagz_text.png";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import FormSelectFile from "../Fragments/FormSelectFile";
import pesawat from "../assets/pesawat.png";
import Footer from "../Fragments/Footer";
import ButtonTahun from "../Fragments/ButtonTahun";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UploadMajalah = () => {
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            setToken(response.data.accessToken);
            const decode = jwtDecode(response.data.accessToken);
            setExpire(decode.exp);
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

    const uploadMajalah = async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('tahun_terbit', selectedYear);
            formData.append("foto", e.target.foto.files[0]);

            const response = await axiosJWT.post("https://sman-61-server.vercel.app/majalah", formData, {
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

    const handleYearClick = (year) => {
        setSelectedYear((prevYear) => (prevYear === year ? null : year));
      };

    return (
        <div className="background">
            <div className="pt-5 flex">
                <Link to="/upload">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex flex-col pt-16 justify-center gap-4 items-center">
                <div>
                    <img className="w-[207px]" src={nasamagz} alt="" />
                </div>
                <div>
                    <img src={nasamagzText} alt="" />
                </div>
            </div>
            <form className="px-4 pt-10 flex flex-col justify-center gap-5 mb-44" action="" onSubmit={uploadMajalah}>
                <div>
                    <h1 className="text-white font-semibold">Pilih Tahun :</h1>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <ButtonTahun tahun="2019" onClick={handleYearClick} isSelected={selectedYear === "2019"} />
                    <ButtonTahun tahun="2020" onClick={handleYearClick} isSelected={selectedYear === "2020"} />
                    <ButtonTahun tahun="2021" onClick={handleYearClick} isSelected={selectedYear === "2021"} />
                    <ButtonTahun tahun="2022" onClick={handleYearClick} isSelected={selectedYear === "2022"} />
                    <ButtonTahun tahun="2023" onClick={handleYearClick} isSelected={selectedYear === "2023"} />
                    
                </div>
                <FormSelectFile />
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

export default UploadMajalah;

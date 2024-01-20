import logo from "../assets/logo.png";
import choose from "../assets/Choose.png";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import Footer from '../Fragments/Footer'
import ButtonChoose from "../Fragments/ButtonChoose";
import "../css/style.css";
import { useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Upload = () => {
    
    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            jwtDecode(response.data.accessToken);
        } catch (error) {
            if (error.response) {
                window.location.href = "/";
            }
        }
    };
    return (
        <div className="background">
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex flex-col justify-center items-center pt-10 mb-16 gap-4">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <img src={choose} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 mb-20">
                <Link to="/upload/nasa-magz">
                    <ButtonChoose isi="NasaMagz" />
                </Link>
                <Link to="/upload/fotografi">
                    <ButtonChoose isi="Fotografi" />
                </Link>
                <Link to="/upload/pojok-karya">
                    <ButtonChoose isi="Pojok Karya" />
                </Link>
                <Link to="/upload/artikel">
                    <ButtonChoose isi="Artikel" />
                </Link>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Upload;

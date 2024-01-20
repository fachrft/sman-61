import "../css/style.css";
import logo from "../assets/logo.png";
import InputForm from "../Fragments/InputForm";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [errorLogin, setErrorLogin] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://sman-61-server.vercel.app/login", {
                name : e.target.name.value,
                password: e.target.password.value
            });
            alert('login berhasil')
            window.location.href = "/";
        } catch (error) {
            if (error.response) {
                setErrorLogin(error.response.data.msg);
            }
        }
    };
    return (
        <div className="background h-[110vh]">
            <div className="pt-5 flex">
                <Link to="/">
                    <Button isi="Kembali" backgroundColor="#D64D69" />
                </Link>
                <div></div>
            </div>
            <div className="flex flex-col pt-10 mb-10 justify-center items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className="font-semibold text-2xl text-white">Login Details</h1>
                </div>
            </div>
            <div className="text-center text-red-500 font-semibold">
                <p>{errorLogin}</p>
            </div>
            <form action="" className="px-8" onSubmit={handleLogin}>
                <InputForm name="name" label="User : " placeholder="Masukkan Username" type="text" />
                <InputForm name="password" label="Password : " placeholder="Masukkan Password" type="password" />
                <button className="text-white bg-bg-color w-full py-3 rounded-xl font-semibold text-2xl" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

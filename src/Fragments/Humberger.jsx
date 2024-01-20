import { useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Humberger = () => {
    const hamburger = useRef(null);
    const header = useRef(null);
    const navMenu = useRef(null);
    window.onscroll = () => {
        const fixedNav = header.current.offsetTop;
        if (window.pageYOffset > fixedNav) {
            header.current.classList.add("navbar-fixed");
            navMenu.current.classList.add("text-black");
        } else {
            header.current.classList.remove("navbar-fixed");
        }
    };

    const clickHamburger = () => {
        hamburger.current.classList.toggle("hamburger-active");
        navMenu.current.classList.toggle("hidden");
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get("https://sman-61-server.vercel.app/token");
            setIsLoggedIn(true);
            jwtDecode(response.data.accessToken);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await axios.delete("https://sman-61-server.vercel.app/logout");
            alert('Berhasil Logout')
            window.location.href = "/login";
        } catch (error) {
            console.log(error);
        }
        setIsLoggedIn(false);
    };

    return (
        <header ref={header} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 h-20">
            <div className="container">
                <div className="flex px-1 font-sans justify-between items-center lg:px-10">
                    <div>
                        {isLoggedIn && (
                            <Link to="/upload">
                                <Button isi="Upload" backgroundColor="#D64D69" />
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center">
                        <button ref={hamburger} onClick={clickHamburger} className="animasi-x absolute pr-4 right-4 block lg:hidden" type="Button">
                            <span className="hamburger border-2 transition duration-200 ease-in-out origin-top-left"></span>
                            <span className="hamburger border-2 transition duration-200 ease-in-out"></span>
                            <span className="hamburger border-2 transition duration-200 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav ref={navMenu} className="hidden absolute bg-white max-w-[280px] right-3 w-full py-5 shadow-lg rounded-lg top-16 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="lg:flex">
                                <li className="group">
                                    <a href="/all-artikel" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        Artikel Mingguan
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="/all-fotografi" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        Fotografi Acara
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="https://spotify.link/VB5xVIQeMDb" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        Audio NASATALKS
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="/all-majalah" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        NasaMagz 
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="/all-pojok-karya" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        Pojok karya
                                    </a>
                                </li>
                                <li className="group">
                                    <a href="https://www.instagram.com/nasa.pers/" className="text-base py-2 mx-8 flex lg:text-white font-semibold group-hover:text-sky-500">
                                        Sosial media NASAPERS
                                    </a>
                                </li>
                                <Link to={isLoggedIn ? "/" : "/login"}>
                                    <Button isi={isLoggedIn ? "Logout" : "Login"} backgroundColor="#805A8A" onClick={isLoggedIn ? logout : null} />
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Humberger;

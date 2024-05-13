import logoFooter from "../assets/logo-footer.png";
import Location from "../assets/Location.png";
import instagram from "../assets/instagram.png";
import emailPutih from "../assets/Email-putih.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="pb-10">
            <div className="flex px-3 gap-3 items-center ">
                <div className="">
                    <img className="w-40" src={logoFooter} alt="" />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <div className="flex gap-1">
                        <div className="max-w-[200px]">
                            <p className="text-xs text-end font-semibold leading-relaxed">Jl. Taruna Jl. Pahlawan Revolusi No.2, Pd. Bambu, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</p>
                        </div>
                        <div className="translate-y-1">
                            <img className="w-10" src={Location} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-7 justify-between px-3 items-center pt-10">
                <div>
                    <h1 className="font-semibold text-sm">Made With Love by co-Pilot</h1>
                </div>
                <div className="flex gap-5">
                    <Link to="https://www.instagram.com/nasa.pers/">
                        <img src={instagram} alt="" />
                    </Link>
                    <Link
                        to="mailto:persenamsatu@gmail.com
"
                    >
                        <img className="translate-y-1" src={emailPutih} alt="" />
                    </Link>
                    <Link to="https://twitter.com/nasapers">
                        <img src={twitter} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

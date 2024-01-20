import Humberger from "../Fragments/Humberger";
import Logo from "../assets/logo.png";
import Button from "../Fragments/Button";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-Background h-[140vh]">
            <div className="h-20">
                <Humberger />
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <h1 className="text-xl text-white font-semibold">NASA.PERS</h1>
                </div>
            </div>
            <div className="flex justify-center items-center px-5">
                <div className="dalem h-[380px] w-[341px] px-7 flex flex-col text-white item-center gap-[14px] bg-bg-color">
                    <div className="pt-12">
                        <h1 className="text-center font-semibold text-xl">Tentang Kami</h1>
                    </div>
                    <div className="text-center">
                        <p>
                            Pers 61 merupakan suatu ekstrakurikuler sekaligus organisasi di bawah SMAN 61 Jakarta. Pers 61 berspesialisasi di bidang jurnalistik, fotografi, videografi, dan desain. Berperan sebagai penyedia media massa bagi warga SMAN
                            61 serta khalayak umum.
                        </p>
                    </div>
                    <Link to='/pengurus'>
                        <div className="flex justify-center">
                            <Button isi="LEBIH LANJUT" backgroundColor="#D64D69" />
                        </div>
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Hero;

import Nasa from "../Fragments/Nasa";
import nasatalks from "../assets/nasatalks.png";
import nasatalksText from "../assets/nasatalks_text.png";
import nasamagz from "../assets/nasamagz.png";
import nasamagzText from "../assets/nasamagz_text.png";
import nasamagzvol6 from '../assets/NASAMAGZ VOL 6-02.png'
import { Link } from "react-router-dom";

const NasaPage = () => {
    return (
        <div className="flex flex-col gap-20 justify-start">
            <div>
                <Link to="https://spotify.link/VB5xVIQeMDb">
                    <Nasa image={nasatalks} title={nasatalksText} />
                </Link>
            </div>
            <div>
                <Link to="./all-majalah">
                    <Nasa image={nasamagz} title={nasamagzText} />
                </Link>
            </div>
            <div>
                <Link to="./all-majalah-vol6">
                    <Nasa image={nasamagzvol6} title={nasamagzText} />
                </Link>
            </div>
        </div>
    );
};

export default NasaPage;

import Nasa from "../Fragments/Nasa";
import nasatalks from "../assets/nasatalks.png";
import nasatalksText from "../assets/nasatalks_text.png";
import nasamagz from "../assets/nasamagz.png";
import nasamagzText from "../assets/nasamagz_text.png";
import { Link } from "react-router-dom";

const NasaPage = () => {
    return (
        <div>
            <div className="-translate-y-40">
                <Link to="https://spotify.link/VB5xVIQeMDb">
                    <Nasa image={nasatalks} title={nasatalksText} />
                </Link>
            </div>
            <div>
                <Link to="./all-majalah">
                    <Nasa image={nasamagz} title={nasamagzText} />
                </Link>
            </div>
        </div>
    );
};

export default NasaPage;

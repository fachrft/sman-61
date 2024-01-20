import Hero from "../Pages/Hero";
import NasaPage from "../Pages/NasaPage";
import Fotografi from "../Pages/Fotografi";
import PojokKarya from "../Pages/PojokKarya";
import Artikel from "../Pages/Artikel";
import Handphone from "../Pages/Handphone";
import Footer from "../Fragments/Footer";
import "../css/style.css";

const Home = () => {
    return (
        <div className="background">
            <Hero />
            <div className="mb-28">
                <NasaPage />
            </div>
            <div>
                <Fotografi />
            </div>
            <div>
                <PojokKarya />
            </div>
            <div>
                <Artikel />
            </div>
            <div>
                <Handphone/>
            </div>
            <div className="pt-20">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Footer />
        </div>
    );
}

export default Home;
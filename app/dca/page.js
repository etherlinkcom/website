import Navbar from "../components/navbar";
import Main from "./main";
import Features from "./features";
import Program from "./program";
import Cta from "./cta";
import Faq from "./faq";
import Footer from "../components/footer";

export const metadata = {
    title: 'Etherlink',
    description: 'Build Web3 on Etherlink',
}

const Home = () => {
    return (
        <>
            <Navbar />
            <Main />
            <Features />
            <Program />
            <Faq />
            <Cta />
            <Footer />
        </>
    );
}

export default Home;
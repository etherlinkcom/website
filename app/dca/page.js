import NavbarDCA from "./navbarDCA";
import MainDCA from "./mainDCA";
import Partners from "./partners"
import Survey from "./survey";
import Footer from "../components/footer";

export const metadata = {
    title: 'Etherlink',
    description: 'Build Web3 on Etherlink',
}

const Home = () => {
    return (
        <>
            <NavbarDCA />
            <MainDCA />
            <Partners />
            <Survey />
            <Footer />
        </>
    );
}

export default Home;
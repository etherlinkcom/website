import NavbarDCA from "./navbarDCA";
import MainDCA from "./mainDCA";
import Partners from "./partners"
import Survey from "./survey";
import Footer from "../components/footer";

export const metadata = {
    title: 'DeFi Catalyst Accelerator',
    description: 'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.',
    metadataBase: 'https://etherlink.com/dca'
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
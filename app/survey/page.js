import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Survey from "./survey";
import Footer from "../components/footer";

export const metadata = {
    title: 'Etherlink',
    description: 'Build Web3 on Etherlink',
}

const Home = () => {
    return (
        <>
            <Navbar />
            <SectionTitle
                pretitle="Optional: Share your Dewhale address at the end to be eligible to win $1,000 USDT 💸"
                title="Dewhales member survey for Etherlink">
            </SectionTitle>
            <Survey />
            <Footer />
        </>
    );
}

export default Home;
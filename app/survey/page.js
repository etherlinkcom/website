import Navbar from "../../components/navbar/navbar";
import SectionTitle from "../../components/shared/sectionTitle";
import Survey from "./survey";
import Footer from "../../components/footer";


export const metadata = {
    title: 'Etherlink',
    description: 'Build Web3 on Etherlink',
}


const Home = () => {
    return (
        <>
            <Navbar />
            <SectionTitle
                pretitle="Optional: Share your Dewhale address to be eligible to win $1,000 USDT 💸"
                title="Would you use Etherlink?">
            </SectionTitle>
            <Survey />
            <Footer />
        </>
    );
}

export default Home;
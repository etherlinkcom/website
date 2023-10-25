import Main from "../components/main";
import Navbar from "../components/navbar/navbar";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Cta from "../components/cta";
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
      <Roadmap />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
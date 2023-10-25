import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Cta from "../components/cta";
import Footer from "../components/footer";

export const metadata = {
    title: 'Etherlink',
    description: 'Build web3 on Etherlink',
  }

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
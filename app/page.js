import Navbar from "./components/navbar";
import Main from "./components/main";
import Features from "./components/features";
import Roadmap from "./components/roadmap";
import Cta from "./components/cta";
import Footer from "./components/footer";

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
      <Cta 
        headerText="Ready to learn more about Etherlink?" 
        descriptionText="Our step-by-step guides will help you get started" 
        buttonText="Read the Docs"
        buttonUrl="https://docs.etherlink.com" 
      />
      <Footer />
    </>
  );
}

export default Home;
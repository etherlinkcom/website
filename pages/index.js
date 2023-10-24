import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Cta from "../components/cta";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Etherlink</title>
        <meta
          name="description"
          content="Build web3 on Etherlink"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
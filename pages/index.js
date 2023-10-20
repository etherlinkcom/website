import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import Features from "../components/features";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>Etherlink</title>
        <meta
          name="description"
          content="Etherlink is the future of DeFi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
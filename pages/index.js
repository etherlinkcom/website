import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Features from "../components/features";
import Timeline from "../components/timeline";
import Cta from "../components/cta";
import Footer from "../components/footer";

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
      <Timeline />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
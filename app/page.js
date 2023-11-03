import Navbar from "../components/navbar/navbar";
import Main from "../components/main";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Cta from "../components/cta";
import SectionTitle from "../components/shared/sectionTitle";
import { benefitOne, benefitTwo, Incubator } from "../components/incubator";
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
      <SectionTitle
        pretitle="Hosted by TZAPAC @ Singapore, 15th Jan - 12th Feb 2024"
        title="Etherlink's DeFi Incubator">
        The DeFi Incubator hosted by TZAPAC in Singapore is a dedicated startup programme focused on entrepreneurs with innovative ideas within the DeFi ecosystem.
        <p>
          <br></br>
          Selected teams will go through an intensive in-person 4 week programme in Singapore starting on the 15th of January 2024 ultimately pitching to an investment committee who will decide on whether your project should be funded.
        </p>
      </SectionTitle>
      <Incubator data={benefitOne} />
      <Incubator imgPos="right" data={benefitTwo} />
      <Footer />
    </>
  );
}

export default Home;
import Navbar from "../../components/navbar/navbar";
import IncubatorMain from "../../components/incubator/main";
import Cta from "../../components/cta";
import SectionTitle from "../../components/shared/sectionTitle";
import { benefitOne, benefitTwo, IncubatorInfo } from "../../components/incubator/incubator";
import Footer from "../../components/footer";

export const metadata = {
    title: 'Etherlink',
    description: 'Build Web3 on Etherlink',
}

const Home = () => {
    return (
        <>
            <Navbar />
            <IncubatorMain />
            {/* <SectionTitle
                pretitle="Hosted by TZAPAC @ Singapore, 15th Jan - 12th Feb 2024"
                title="Etherlink's DeFi Incubator">
                The DeFi Incubator hosted by TZAPAC in Singapore is a dedicated startup programme focused on entrepreneurs with innovative ideas within the DeFi ecosystem.
                <p>
                    <br></br>
                    Selected teams will go through an intensive in-person 4 week programme in Singapore starting on the 15th of January 2024 ultimately pitching to an investment committee who will decide on whether your project should be funded.
                </p>
            </SectionTitle> */}
            <IncubatorInfo data={benefitOne} imgPos="right" />
            <IncubatorInfo data={benefitTwo} />
            <Cta
                headerText="Ready to apply to the Etherlink DeFi incubator?"
                descriptionText="Let's build Etherlink together 🚀"
                buttonText="Apply"
                buttonUrl="https://google.com"
            />

            <Footer />
        </>
    );
}

export default Home;
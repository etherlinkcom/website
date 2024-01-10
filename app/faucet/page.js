"use client"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FaucetTable from "./faucetTable";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <FaucetTable title="Faucet Demo" />
            </div>
            <Footer />
        </>
    );
}

export default Home;
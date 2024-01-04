"use client"

import React from "react"
import { Chrono } from "react-chrono";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const milestones = [
    {
        title: "January 2024",
        cardTitle: "Testnet Alpha 🛺",
        cardSubtitle: "",
        cardDetailedText: ["- EtherScout Explorer out of beta, hosted by BlockScout", "- Oracle Price Feeds available from Redstone", "- Subgraphs available from The Graph and Chainstack", "- LayerZero Wrapped-Asset Bridge"],
    },
    {
        title: "February 2024",
        cardTitle: "Testnet Beta 🚘",
        cardSubtitle: "",
        cardDetailedText: ["- Etherlink Hackathon", "- Provisional Decentralized Sequencer", "- Beta version of a 'DeFi Super App' live on Etherlink Testnet", "- Layer3 Testnet-related Quests introduced"],
    },
    {
        title: "March 2024",
        cardTitle: "Mainnet Launch 🚀",
        cardSubtitle: ``,
        cardDetailedText: ["- Etherlink Incubator Kick-off in London", "- Tezos L1 Bakers governance mechanism initialized for Kernel upgrades", "- Tezos L1 Bakers choice mechanism for Sequencer Operators initialized", "- Audits finalized for the Etherlink Kernel & Sequencer"]
    }
];

export default function Roadmap() {
    return (
        <Container className="flex flex-wrap justify-center">
            <div className="-mt-12" style={{ width: "100vh" }}>
                <SectionTitle
                    pretitle="Track our Progress"
                    title="Etherlink Roadmap"
                    className="text-center"></SectionTitle>
                <div className="ml-16 sm:ml-8">
                    <Chrono
                        items={milestones}
                        activeItemIndex={12}
                        mode="VERTICAL"
                        theme={{
                            primary: '#59ad8c',
                            secondary: '#59ad8c',
                            titleColor: '#59ad8c',
                            cardBgColor: '#171717',
                            cardTitleColor: 'white',
                            titleColorActive: 'black',
                            cardSubtitleColor: 'white',
                            cardDetailsColor: 'white',
                        }}
                        fontSizes={{
                            cardSubtitle: '0.85rem',
                            cardText: '1rem',
                            cardTitle: '1.4rem',
                            title: '1rem',
                        }}
                        lineWidth={6}
                        cardHeight={250}
                        scrollable={false}
                        useReadMore={false}
                        hideControls={true}
                        disableNavOnKey={true}
                        disableClickOnCircle={true}
                        disableAutoScrollOnClick={true}
                    />
                </div>
            </div>
        </Container>

    )
}

"use client"

import React from "react"
import { Chrono } from "react-chrono";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const milestones = [
    {
        title: "Dec '23",
        cardTitle: "Testnet Alpha",
        cardSubtitle: "",
        cardDetailedText: ["- Provisional Centralized Sequencer", "- Oracle Price Feeds available from 2 providers", "- Subgraphs available from 2 providers", "- LayerZero Bridge"],
    },
    // {
    //     title: "Jan '24",
    //     cardTitle: "The Egg Incubator Kickoff",
    //     cardSubtitle: "@ Singapore",
    //     cardDetailedText: ["", ""],
    // },
    {
        title: "Feb '24",
        cardTitle: "Testnet Beta",
        cardSubtitle: "",
        cardDetailedText: ["- Provisional Distributed Sequencer", "- Full Explorer Launch", "- ETHDenver Hackathon", "- Election of 7 initial geographically distributed Sequencer Operators"],
    },
    {
        title: "Mar '24",
        cardTitle: "Mainnet Launch 🚀",
        cardSubtitle: ``,
        cardDetailedText: ["- Significant Partner Apps Launched", "- Ecosystem Fund Applications Open"]
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

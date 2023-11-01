"use client"

import React from "react"
import { Chrono } from "react-chrono";
import Container from "./shared/container";
import SectionTitle from "./shared/sectionTitle";

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
        cardDetailedText: ["- Provisional Distributed Sequencer", "- Full functionality implemented on Explorer", "- ETHDenver Hackathon with infrastructure partners", "- Election of the initial set of 7 geographically distributed Sequencer Operators"],
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
                        borderLessCards={true}
                        mode="VERTICAL"
                        activeItemIndex={12}
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
                        cardWidth={400}
                        cardHeight={250}
                        lineWidth={6}
                        scrollable={false}
                        hideControls={true}
                        disableNavOnKey
                        disableClickOnCircle={true}
                        disableAutoScrollOnClick={true}
                    />
                </div>
            </div>
        </Container>

    )
}

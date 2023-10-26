"use client"

import React from "react"
import { Chrono } from "react-chrono";
import Container from "./shared/container";
import SectionTitle from "./shared/sectionTitle";

const milestones = [
    {
        title: "Nov '23",
        cardTitle: "Etherlink Ghostnet",
        cardSubtitle: "Stable Release",
        cardDetailedText: ["- 15 second block time", "- Oracle Price Feeds available from 2 providers", "- LayerZero Endpoint"],
    },
    {
        title: "Dec '23",
        cardTitle: "Etherlink Ghostnet",
        cardSubtitle: "with Provisional Centralised Sequencer",
        cardDetailedText: ["- 500ms block time", "- Subgraphs available from 2 providers", "- LayerZero wrapped asset bridge"],
    },
    {
        title: "Jan '24",
        cardTitle: "Etherlink Explorer",
        cardSubtitle: "explorer.etherlink.com",
        cardDetailedText: ["- Full functionality implemented", "- L2-to-L1 Transaction Viewer "],
    },
    {
        title: "Feb '24",
        cardTitle: "Etherlink Ghostnet",
        cardSubtitle: "with Distributed Sequencer",
        cardDetailedText: ["- Sequencer Operator Reveal 🎩👀", "- ETHDenver Hackathon with infrastructure partners"],
    },
    {
        title: "Mar '24",
        cardTitle: "Etherlink Mainnet Launch",
        cardSubtitle: `Full Launch v1.0`,
        cardDetailedText: ["- Fully functional Mainnet with Distributed Sequencer", "- Fair Ordering, Fast Execution (500ms) and Secure"]
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
                        borderLessCards={true}
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

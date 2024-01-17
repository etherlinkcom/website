"use client"

import React from "react"
import { Chrono } from "react-chrono";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const milestones = [
    {
        title: "Q1 2024",
        cardTitle: " 🏗️ Phase One",
        cardSubtitle: "",
        cardDetailedText: ["- BuildersNet launch", "- Builders Program Launch", "- Testnet Latency Improvements", "- Etherlink Ecosystem Announcements", "- Day-One Launch Partners", "- Web3 Infrastructure Partners", "- App Launches", "- Governance", "- Etherlink Quests"],
    },
    {
        title: "Q2 2024",
        cardTitle: " 🏭 Phase Two",
        cardSubtitle: "",
        cardDetailedText: ["- Etherlink Launch", "- Etherlink Incubator Kick-off in Singapore", "- Etherlink Ecosystem Expansion", "- Etherlink Hackathon", "- Audits finalized for the Etherlink Kernel & Sequencer", "- Etherlink Quests Expansion"],
    },
    {
        title: "Q3 2024",
        cardTitle: " 🏛️ Phase Three",
        cardSubtitle: ``,
        cardDetailedText: ["- Fair Ordering (MEV Protection)", "- DAL Support", "- TezDev 2024", "- More Coming Soon™"]
    }
];

export default function Roadmap() {
    return (
        <Container className="flex flex-wrap justify-center">
            <div className="-mt-12" style={{ width: "100vh" }}>
                <SectionTitle
                    pretitle="Track our Progress"
                    title="Etherlink Roadmap"
                    className="text-center">
                </SectionTitle>
                <div className="ml-10 sm:ml-8">
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

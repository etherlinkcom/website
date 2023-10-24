import React from "react"
import { Chrono } from "react-chrono";
import data from "./data"
import Container from "./container";
import SectionTitle from "./sectionTitle";

const Timeline = () => {
    return (
        <Container className="flex flex-wrap justify-center">
            <div className="ml-32 mr-32" style={{ width: "80vh", height: "80vh" }}>
                               <SectionTitle
                    pretitle="Track our Progress"
                    title="Etherlink Roadmap"
                    className="text-center"></SectionTitle>
                <Chrono
                    items={data}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={100}
                    activeItemIndex={0}
                    theme={{
                        primary: '#59ad8c',
                        secondary: '#59ad8c',
                        titleColor: '#b6feda',
                        cardBgColor: '#171717',
                        cardTitleColor: 'white',
                        titleColorActive: 'black',
                        cardSubtitleColor: 'white',
                        cardDetailsColor: 'white',
                    }}
                    hideControls={true}
                    disableNavOnKey
                    disableClickOnCircle={true}
                />
            </div>
        </Container>

    )
}

export default Timeline;


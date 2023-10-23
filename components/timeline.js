import React from "react"
import { Chrono } from "react-chrono";
import data from "./data"

const Timeline = () => {

  return (
    <div style={{ height: '100vh' }}>
        <Chrono
          items={data}
          mode="HORIZONTAL"
          fontSizes={{
            title: "1rem"
          }}
          theme={{
            primary: '#b6feda',
            secondary: 'black',
            titleColor: 'white',
          }}
        />
    </div>
  )
}

export default Timeline;

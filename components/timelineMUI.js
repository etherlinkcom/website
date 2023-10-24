import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="etherlinkGreen">
          <b> Now </b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="mb-4"> <b> Etherlink Ghostnet MVP </b></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="">
          <b> Etherlink Ghostnet with Centralised Sequencer </b> <br /> 500ms latency for apps to test in similar environment to mainnet at launch
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>20 Dec 2023</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="">
          20 Feb 2024 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><b> Etherlink Ghostnet with Distributed Sequencer </b> <br /> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="">
          <b> Etherlink Mainnet with Distributed Sequencer </b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>20 Mar 2024</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
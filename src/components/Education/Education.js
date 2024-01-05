import React from 'react'
import { Container, Wrapper, Title, Desc, TimelineSection } from '../Education/EducationStyle'
import { Timeline } from '@mui/icons-material'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import { education, experiences } from '../../data/data'
import EducationCard from '../Cards/EducationCard'

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => {
              return (
                <>
                  <TimelineItem >
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <EducationCard education={education} />
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary" />
                      {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                    </TimelineSeparator>
                  </TimelineItem>
                </>
              )
            })}
          </Timeline>

        </TimelineSection>
      </Wrapper>
    </Container>)
}

export default Education
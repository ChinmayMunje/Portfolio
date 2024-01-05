import React from 'react'
import { Modal } from '@mui/material'
import {Container, Wrapper, Image, Title, Date, Tags, Tag, Member, MemberImage, MemberName, Members, Button, ButtonGroup, Desc, Label} from "../ProjectDetails/ProjectDetailsStyle"
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material'

const ProjectDetails = ({openModel,setOpenModel}) => {
  const project = openModel?.project;

  return (
    <Modal open={true} onClose={() => setOpenModel({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModel({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project?.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <GitHub />
                    </a>
                    <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target='new'>View Code</Button>
            <Button href={project?.webapp} target='new'>View Live App</Button>
          </ButtonGroup>
        </Wrapper>
      </Container>

    </Modal>)
}

export default ProjectDetails
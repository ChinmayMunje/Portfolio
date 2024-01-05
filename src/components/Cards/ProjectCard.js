import React from 'react'
import { Card, Image, Tags, Tag, Details, Description, Title, Date, Members, Avatar } from './ProjectCardStyle'

const ProjectCard = ({project, setOpenModel}) => {
  return (
    <Card onClick={() => setOpenModel({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      {/* <Button>View Project</Button> */}
    </Card>)
}

export default ProjectCard
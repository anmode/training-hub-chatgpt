import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const IndexPage = ({ data }) => {
  const modules = data.allYaml.nodes

  return (
    <Container>
      {modules.map(module => (
        <Module key={module.id}>
          <Name dangerouslySetInnerHTML={{ __html: module.name }} />
          <Description dangerouslySetInnerHTML={{ __html: module.description }} />
          <Links>
            <Link href={module.repository}>Repository</Link>
            <Link href={module.webpage}>Webpage</Link>
            {module.videos && <Link href={module.videos}>Videos</Link>}
          </Links>
        </Module>
      ))}
    </Container>
  )
}

export const query = graphql`
  query {
    allYaml {
      nodes {
        description
        name
        repository
        status
        videos
        webpage
        id
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
`

const Module = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  width: 300px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const Name = styled.h2`
  color: #444444;
  font-size: 24px;
  margin-bottom: 8px;
`

const Description = styled.p`
  color: #666666;
  font-size: 16px;
  margin-bottom: 16px;

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 4px;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
`

const Link = styled.a`
  color: #0077cc;
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #004499;
    text-decoration: underline;
  }
`

export default IndexPage

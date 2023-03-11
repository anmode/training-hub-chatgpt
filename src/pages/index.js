import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const modules = data.allYaml.nodes

  return (
    <div>
      {modules.map(module => (
        <div key={module.id}>
          <h2>{module.name}</h2>
          <p>{module.description}</p>
          <p><a href={module.repository}>Repository</a></p>
          <p><a href={module.webpage}>Webpage</a></p>
          {module.videos && <p><a href={module.videos}>Videos</a></p>}
        </div>
      ))}
    </div>
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

export default IndexPage

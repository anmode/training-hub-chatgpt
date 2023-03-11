import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "./layout";

const IndexPage = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [videosFilter, setVideosFilter] = useState(false);

  const modules = data.allYaml.nodes.filter(module => {
    // filter by status
    if (statusFilter !== "all" && module.status !== statusFilter) {
      return false;
    }

    // filter by videos
    if (videosFilter && !module.videos) {
      return false;
    }

    return true;
  });

  const handleStatusFilterChange = event => {
    setStatusFilter(event.target.value);
  };

  const handleVideosFilterChange = event => {
    setVideosFilter(event.target.checked);
  };

  return (
    <Layout>
      <Container>
        <Filters>
          <StatusFilter
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
            <option value="alpha">Alpha</option>
          </StatusFilter>
          <VideosFilter
            checked={videosFilter}
            onChange={handleVideosFilterChange}
          />
          <VideosFilterLabel htmlFor="videos-filter">
            Videos Available
          </VideosFilterLabel>
        </Filters>
        <Modules>
          {modules.map((module) => (
            <Module key={module.id}>
              {module.heroImage && (
                <ModuleImage>
                  <HeroImage src={module.heroImage} alt={module.name} />
                </ModuleImage>
              )}
              <ModuleContent>
                <Name dangerouslySetInnerHTML={{ __html: module.name }} />
                <Description
                  dangerouslySetInnerHTML={{ __html: module.description }}
                />
                <Links>
                  <Link href={module.repository}>Repository</Link>
                  <Link href={module.webpage}>Webpage</Link>
                  {module.videos && <Link href={module.videos}>Videos</Link>}
                </Links>
              </ModuleContent>
            </Module>
          ))}
        </Modules>
      </Container>
    </Layout>
  );
};

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
        heroImage
        id
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const StatusFilter = styled.select`
  margin-right: 16px;
`;

const VideosFilter = styled.input.attrs({
  type: "checkbox",
  id: "videos-filter",
})`
  margin-right: 8px;
`;

const VideosFilterLabel = styled.label`
  font-size: 16px;
`;

const Modules = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 16px;
`;

 const HeroImage = styled.img`
    border-radius: 8px;
    margin-bottom: 16px;
    max-width: 100%;
    width: 100%;
    height: 200px;
  `;
  
  const Module = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const ModuleImage = styled.div`
  width: 40%;
  margin-right: 16px;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const ModuleContent = styled.div`
  width: 60%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 16px;
  color: #1e90ff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0066cc;
    text-decoration: underline;
  }
`;
    
    export default IndexPage;
    
    
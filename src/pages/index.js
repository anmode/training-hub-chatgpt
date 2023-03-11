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
        {modules.map(module => (
          <Module key={module.id}>
            <Name dangerouslySetInnerHTML={{ __html: module.name }} />
            <Description
              dangerouslySetInnerHTML={{ __html: module.description }}
            />
            <Links>
              <Link href={module.repository}>Repository</Link>
              <Link href={module.webpage}>Webpage</Link>
              {module.videos && <Link href={module.videos}>Videos</Link>}
            </Links> 
          </Module>
        ))}
      </Modules>
    </Container></Layout>
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
  aria-label: "Filter by status";
`;

const VideosFilter = styled.input.attrs({ type: "checkbox", id: "videos-filter" })`
  margin-right: 8px;
`;

const VideosFilterLabel = styled.label`
  font-size: 16px;
  aria-label: "Filter by videos available";
`;

const Modules = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 16px;
`;

const Module = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 300px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
  color: #555;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Link = styled.a`
  color: #2f80ed;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #1f65d6;
  }
`;

const Status = styled.div`
color: ${props => {
  switch (props.status) {
    case 'stable':
      return '#4CAF50';
    case 'beta':
      return '#FFC107';
    case 'alpha':
      return '#F44336';
    default:
      return '#9E9E9E';
  }
}};
font-size: 14px;
font-weight: bold;
margin-top: 8px;
`;


  export default IndexPage;
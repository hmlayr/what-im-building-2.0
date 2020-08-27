import React from "react";
import gql from "graphql-tag";
import { useGetProjectsQuery } from "../../graphql-operations";
import styled from "styled-components";
import ProjectStub from "../ProjectStub";

interface Props {}

const ProjectContainer = styled.div`
  padding: 50px;
  border: 1px solid black;
`;

export default (props: Props) => {
  const { data, loading, error } = useGetProjectsQuery({ variables: { projectId: "5f416c4ca94232ee5cbde0f1" } });
  if (data && data.project) {
    return (
      <ProjectContainer>
        {data && (
          <ProjectStub
            projectId={data!.project!._id}
            description={data!.project!.description || "no description"}
            title={data!.project!.title}
          />
        )}
      </ProjectContainer>
    );
  }
  return <div />;
};

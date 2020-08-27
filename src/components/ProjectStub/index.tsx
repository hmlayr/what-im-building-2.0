import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import Editable from "../Editable";
import { useUpdateProjectMutation } from "../../graphql-operations";
import { ProjectUpdateInput } from "../../types";

const ProjectStubWrapper = styled.div`
  padding: 25px;
`;

interface Props {
  title: string;
  description: string;
  projectId: string;
}

export default (props: Props) => {
  // const [projectStub, setProjectStub] = useState({ title: props.title, description: props.description })
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [updateProjectMutation, updateProjectStatus] = useUpdateProjectMutation();

  const onUpdateProjectStub = async (updates: ProjectUpdateInput) => {
    await updateProjectMutation({ variables: { projectId: props.projectId, updates } });
  };

  useEffect(() => console.log(props.title));

  return (
    <ProjectStubWrapper>
      {updateProjectStatus.loading ? (
        "loading..."
      ) : (
        <h1>
          <Editable
            editing={editingTitle}
            onEdit={() => setEditingTitle(true)}
            onCancel={() => setEditingTitle(false)}
            defaultValue={props.title}
            onSave={(title) => {
              setEditingTitle(false);
              onUpdateProjectStub({ title });
            }}
          />
        </h1>
      )}
      <p>
        <Editable
          editing={editingDescription}
          onEdit={() => setEditingDescription(true)}
          onCancel={() => setEditingDescription(false)}
          defaultValue={props.description}
          onSave={(description) => {
            setEditingDescription(false);
            onUpdateProjectStub({ description });
          }}
        />
      </p>
    </ProjectStubWrapper>
  );
};

import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";

const EditableInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
interface Props {
  onSave: (value: string) => void;
  defaultValue: string;
  onEdit: VoidFunction;
  onCancel: VoidFunction;
  editing: boolean;
}

export default (props: Props) => {
  const [value, setValue] = useState(props.defaultValue);
  const inputRef = createRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <div>
      {!props.editing && <span onClick={() => props.onEdit()}>{props.defaultValue}</span>}
      {props.editing && (
        <div>
          <EditableInput
            ref={inputRef}
            type="text"
            value={value}
            onKeyUp={(e) => {
              if (e.which === 13) {
                e.preventDefault();
                props.onSave(value);
              }
            }}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => props.onCancel()}>cancel</button>
          <button onClick={() => props.onSave(value)}>save</button>
        </div>
      )}
    </div>
  );
};

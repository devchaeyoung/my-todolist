import React from "react";
import Button from "../../components/Button";
import styled from "styled-components";

export default function AddTodosInput({ onChange, value, onKeyUp, onClick }) {
  return (
    <StyledAddTodoInput>
      <input type="text" onChange={onChange} onKeyUp={onKeyUp} value={value} />
      <Button onClick={onClick}>Enter</Button>
    </StyledAddTodoInput>
  );
}

const StyledAddTodoInput = styled.div`
  flex-grow: 1;
`;

import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import todoListState from "../../recoil/todos";

import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function DoneList({ todo, onDelete, onChangeTodo }) {
  const todos = useRecoilValue(todoListState);

  return (
    <StyledDoneList>
      <ul> </ul>
    </StyledDoneList>
  );
}

const StyledDoneList = styled.div`
  flex-grow: 3;
  height: 300px;
  width: 300px;
`;

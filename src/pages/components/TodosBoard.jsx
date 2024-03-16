import React from "react";
import { useRecoilValue } from "recoil";

import todoListState from "../../recoil/todos";

import styled from "styled-components";

import TodoItem from "./TodoItem";

export default function TodoList({ onDelete, onChangeDone, onUpdateTodoText }) {
  const todos = useRecoilValue(todoListState);

  return (
    <StyledTodoList>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} onChangeDone={onChangeDone} onDelete={onDelete} onUpdateTodoText={onUpdateTodoText} />;
        })}
      </ul>
    </StyledTodoList>
  );
}

const StyledTodoList = styled.div`
  flex-grow: 3;
  height: 300px;
  width: 300px;
`;

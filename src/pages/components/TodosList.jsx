import React from "react";
import { useRecoilValue } from "recoil";

import todoListState from "../../recoil/todos";
import doneListState from "../../recoil/doneitme";

import styled from "styled-components";

import TodoItem from "./TodoItem";

export default function TodoList({ onDelete, onChangeDone, onUpdateTodoText }) {
  const todos = useRecoilValue(todoListState);
  // const todoItems = todos.filter(todo => todo.done);
  // const doneItems = todos.filter(todo => !todo.done);

  return (
    <StyledTodoList>
      <h2>To Do List</h2>
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              isDone={todo.done}
              onChangeDone={onChangeDone}
              onDelete={onDelete}
              onUpdateTodoText={onUpdateTodoText}
            />
          );
        })}
      </ul>
      <h2>Done List</h2>
      {/* <ul>
        {doneItems.map(doneItem => {
          return <li key={doneItem.id}>{doneItem.text}</li>;
        })}
      </ul> */}
    </StyledTodoList>
  );
}

const StyledTodoList = styled.div`
  flex-grow: 3;
  height: 300px;
  width: 300px;
`;

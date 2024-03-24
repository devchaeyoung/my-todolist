import React from "react";
import { useRecoilValue } from "recoil";

import todoListState from "../../recoil/todos";

import styled from "styled-components";

import TodoItem from "./TodoItem";

export default function TodoList({ onDelete, onChangeDone, onUpdateTodoText }) {
  const todos = useRecoilValue(todoListState);
  // const todoItems = todos.filter(todo => todo.done);
  // const doneItems = todos.filter(todo => !todo.done);
  const doneList = todos.filter(todo => todo.done !== true);

  return (
    <StyledTodoList>
      <h2>To Do List</h2>
      <ul>
        {todos
          .filter(todo => todo.done === false)
          .map(todo => {
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
      <ul>
        {todos
          .filter(todo => todo.done === true)
          .map(todo => {
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
    </StyledTodoList>
  );
}

const StyledTodoList = styled.div`
  flex-grow: 3;
  height: 300px;
  width: 300px;
`;

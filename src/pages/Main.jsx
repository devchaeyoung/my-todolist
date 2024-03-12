import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import todoListState from "../recoil/todos";
import AddTodosInput from "./components/AddTodosInput";
import TodosBoard from "./components/TodosBoard";
import { styled } from "styled-components";

let id = 0;

export default function Main() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputText, setInputText] = useState("");

  const onChangeText = e => {
    setInputText(e.target.value);
  };

  const onAddTodo = () => {
    if (inputText.trim() === "") return alert("내용을 입력하세요");
    const newTodo = {
      id: id,
      todo: inputText,
      create_time: new Date(),
      done: false,
    };
    setTodos(todos.concat(newTodo));
    setInputText("");
    id++;
  };

  const handleKeydown = e => {
    if (e.key === "Enter") {
      onAddTodo();
    }
  };

  const onDeleteTodo = id => {
    const newState = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  };

  const onChangeDone = id => {
    const newState = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });

    setTodos(newState);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storageData = localStorage.getItem("todos");
    if (storageData) {
      setTodos(JSON.parse(storageData));
    }
  }, []);

  return (
    <StyledContainer>
      <AddTodosInput onChange={onChangeText} onKeyDown={handleKeydown} value={inputText} onClick={onAddTodo} />
      <TodosBoard onDelete={onDeleteTodo} onChangeDone={onChangeDone} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

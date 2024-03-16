import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import todoListState from "../recoil/todos";
import AddTodosInput from "./components/AddTodosInput";
import TodoList from "./components/TodosBoard";
import { styled } from "styled-components";

let id = 0;
const storageData = localStorage.getItem("todos");
if (!storageData) {
  id = 0;
} else {
  id = JSON.parse(storageData).length;
}

export default function Main() {
  const [userName, setUserName] = useState("");
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

  const handleKeyDown = e => {
    console.log(e.key);
    if (inputText.trim() === "") return;
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      onAddTodo();
    }
    // if (e.isComposing || e.keyCode === 229) return;
    // if (e.key === "Enter") {
    //   onAddTodo();
    // }
  };

  const onDeleteTodo = id => {
    const newState = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  };

  const onUpdateTodoText = (id, updateText) => {
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, todo: updateText } : todo));
    setTodos(newTodos);
  };

  const onUpdateDone = id => {
    const newState = todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo));

    setTodos(newState);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storageData = localStorage.getItem("todos") || [];
    if (storageData) {
      setTodos(JSON.parse(storageData));
    }
  }, []);

  return (
    <StyledContainer>
      <AddTodosInput onChange={onChangeText} onKeyDown={handleKeyDown} value={inputText} onClick={onAddTodo} />
      <TodoList onDelete={onDeleteTodo} onChangeDone={onUpdateDone} onUpdateTodoText={onUpdateTodoText} />
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

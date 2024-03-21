import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import todoListState from "../recoil/todos";

import Greeting from "../components/Greeting";
import Input from "../components/Input";
import AddTodosInput from "./components/AddTodosInput";
import TodoList from "./components/TodosList";
import { styled } from "styled-components";

let id = 0;

const storageData = localStorage.getItem("todos");

if (!storageData) {
  id = 0;
} else {
  id = JSON.parse(storageData).length;
}

const storageUserName = localStorage.getItem("userprofile") || "";

export default function Main() {
  const [userName, setUserName] = useState("");
  const [isThereName, setIsThereName] = useState(false);
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputText, setInputText] = useState("");

  const onChangeText = e => {
    setInputText(e.target.value);
  };

  const onAddUserName = () => {
    if (inputText.trim() === "") return alert("이름을 입력하세요");
    const newUser = {
      id: new Date(),
      name: inputText,
    };
    setUserName();
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
    if (inputText.trim() === "") return;
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      onAddTodo();
    }
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
      {isThereName ? <Greeting /> : <p>Welcome !{userName}</p>}
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

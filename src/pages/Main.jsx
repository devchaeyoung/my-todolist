import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import todoListState from "../recoil/todos";
import userProfileState from "../recoil/userprofile";

import Greeting from "../components/Greeting";

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

const storageUserName = localStorage.getItem("userprofile") || {};

export default function Main() {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [isThereName, setIsThereName] = useState(false); //이름 있는지 없는지
  const [todos, setTodos] = useRecoilState(todoListState); // 투두상태
  const [userName, setUserName] = useState("");
  const [inputText, setInputText] = useState(""); // 투두 인풋
  const [inputName, setInputName] = useState("");

  const onChangeText = e => {
    setInputText(e.target.value);
  };

  const onAddUserName = e => {
    const newUser = {
      id: new Date(),
      name: inputName,
    };
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      if (inputName.trim() === "") return alert("이름을 입력하세요");
      setUserProfile(newUser);
      setIsThereName(true);
    }
  };

  const onChangeInputName = e => {
    setInputName(e.target.value);
  };

  const onAddTodo = () => {
    if (inputText.trim() === "") return alert("내용을 입력하세요");
    const newTodo = {
      id: id,
      todo: inputText,
      create_time: new Date(),
      done: false,
    };
    console.log(todos);
    console.log("-------todos check-------");
    setTodos(todos.concat(newTodo));
    setInputText("");
    id++;
  };

  const handleKeyDownTodo = e => {
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
    if (!storageUserName) {
      setIsThereName(false);
    } else {
      setUserName(userProfile.name);
    }
  }, [storageUserName]);

  return (
    <StyledContainer>
      {isThereName ? (
        <>
          <p>Welcome ! {userProfile.name}</p>
          <AddTodosInput onChange={onChangeText} onKeyDown={handleKeyDownTodo} value={inputText} onClick={onAddTodo} />
          <TodoList onDelete={onDeleteTodo} onChangeDone={onUpdateDone} onUpdateTodoText={onUpdateTodoText} />
        </>
      ) : (
        <Greeting value={inputName} onKeyDown={onAddUserName} onChange={onChangeInputName} />
      )}
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

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import todoListState from "../recoil/todos";
import AddTodosInput from "./components/AddTodosInput";
import TodosBoard from "./components/TodosBoard";

let id = 0;

export default function Main() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState("");

  const onChangeText = e => {
    setText(e.target.value);
  };

  const onAddTodo = () => {
    const newTodo = {
      id: id,
      todo: text,
      create_time: new Date(),
      done: false,
    };
    setTodos(todos.concat(newTodo));
    setText("");
    id++;
  };

  const handleKeydown = e => {
    if (e.key === "Enter") {
      onAddTodo();
    }
  };

  const onDeleteTodo = e => {
    console.log("delete@@@", e);
    const newState = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  };

  useEffect(() => {}, [todos]);

  return (
    <>
      <AddTodosInput onChange={onChangeText} onKeyDown={handleKeydown} value={text} onClick={onAddTodo} />
      <TodosBoard onClick={onDeleteTodo} />
    </>
  );
}

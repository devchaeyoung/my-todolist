import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import "../App.css";

import todoListState from "../recoil/todos";
import AddTodosInput from "./components/AddTodosInput";
import TodosBoard from "./components/TodosBoard";

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

  // 할 일을 삭제하느 함수
  const onDeleteTodo = id => {
    // 삭제할 때 filter 함수를 써서 그 값을 "필터링 함"
    const newState = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  };

  // 할 일 객체에서 done 값을 변경하는 함수.
  const onChangeDone = id => {
    const newState = todos.map(todo => {
      // 변경하려는 id값과 같은 객체를 찾음.
      if (todo.id === id) {
        // 전개연산자로 이전 값을 "복사"한뒤 done 값만 반대값으로 변경
        return {
          ...todo,
          done: !todo.done,
        };
      }
      // 변경하려는 id값과 같지않으면 변경할 필요가 없으니까 그냥 똑같은 값 return
      else {
        return todo;
      }
    });

    setTodos(newState);
  };

  // todos 상태값이 변경되면 실행되는 useEffect 훅
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 앱이 마운트(렌더링 전)될 때 실행되는 훅
  useEffect(() => {
    const storageData = localStorage.getItem("todos");
    if (storageData) {
      setTodos(JSON.parse(storageData));
    }
  }, []);

  return (
    <div className="container">
      <AddTodosInput onChange={onChangeText} onKeyDown={handleKeydown} value={inputText} onClick={onAddTodo} />
      <TodosBoard onDelete={onDeleteTodo} onChangeDone={onChangeDone} />
    </div>
  );
}

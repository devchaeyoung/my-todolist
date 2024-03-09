import React from "react";
import { useRecoilValue } from "recoil";
import todoListState from "../../recoil/todos";

export default function TodosBoard({ onClick }) {
  const todos = useRecoilValue(todoListState);

  return (
    <>
      <ul>
        {todos &&
          todos.map(i => {
            <li key={i}>
              {i.value}
              <button onClick={onClick}>delete</button>
            </li>;
          })}
      </ul>
    </>
  );
}

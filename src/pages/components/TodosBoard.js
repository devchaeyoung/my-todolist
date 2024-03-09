import React from "react";
import { useRecoilValue } from "recoil";
import todoListState from "../../recoil/todos";
import Checkbox from "../../components/Checkbox";

export default function TodosBoard({ onDelete, onChangeDone }) {
  const todos = useRecoilValue(todoListState);

  return (
    <>
      <ul>
        {todos.map(item => {
          return (
            <li key={item.id}>
              <Checkbox
                isChecked={item.done}
                onChangeChecked={() => {
                  onChangeDone(item.id);
                }}
              >
                {item.todo}
              </Checkbox>
              <button onClick={() => onDelete(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

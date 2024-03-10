import React from "react";
import { useRecoilValue } from "recoil";

import todoListState from "../../recoil/todos";
import Checkbox from "../../components/Checkbox";

import { StyledButton } from "../../styles/Button.style.js";

export default function TodosBoard({ onDelete, onChangeDone }) {
  const todos = useRecoilValue(todoListState);

  return (
    <div className="todo-board">
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
              <StyledButton onClick={() => onDelete(item.id)}>X</StyledButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
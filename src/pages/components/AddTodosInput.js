import React from "react";
import { StyledButton } from "../../styles/Button.style";

export default function AddTodosInput({ onChange, value, onKeyDown, onClick }) {
  return (
    <div className="add-todo-input">
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value} />
      <StyledButton onClick={onClick}>Enter</StyledButton>
    </div>
  );
}

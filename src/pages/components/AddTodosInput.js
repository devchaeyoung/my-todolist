import React from "react";

export default function AddTodosInput({ onChange, value, onKeyDown, onClick }) {
  return (
    <>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value} />
      <button onClick={onClick}>Enter</button>
    </>
  );
}

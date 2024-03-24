import React from "react";
import Input from "../components/Input";
export default function Greeting({ value, onKeyDown, onChange }) {
  return (
    <>
      <h1>What's your name?</h1>
      <Input type="text" value={value} onKeyDown={onKeyDown} onChange={onChange} />
    </>
  );
}

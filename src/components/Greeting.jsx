import React from "react";
import Input from "../components/Input";
export default function Greeting({ userName }) {
  return (
    <>
      <h1>What's your name?</h1>
      <Input type="text" value={userName} />
    </>
  );
}

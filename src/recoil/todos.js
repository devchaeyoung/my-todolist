import { atom } from "recoil";

const todoListState = atom({
  key: "TODO_LIST",
  default: [],
});

export default todoListState;

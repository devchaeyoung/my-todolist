import { atom } from "recoil";

const todoListState = atom({
  key: "TODO_LIST",
  default: defaultValue(),
});

function defaultValue() {
  const storageData = localStorage.getItem("todos");
  if (!storageData) {
    return [];
  }
  return JSON.parse(storageData);
}

export default todoListState;

import { atom } from "recoil";

const todoListState = atom({
  key: "TODO_LIST",
  default: defaultValue(),
});

// recoil의 초기값을 설정하기 위한 초기함수
function defaultValue() {
  const storageData = localStorage.getItem("todos");
  if (!storageData) {
    return [];
  }
  return JSON.parse(storageData);
}

export default todoListState;

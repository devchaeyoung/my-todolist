import { atom } from "recoil";

const doneListState = atom({
  key: "DONE_LIST",
  default: defaultValue(),
});

function defaultValue() {
  const storageData = JSON.parse(localStorage.getItem("todos")) || [];
  const doneData = storageData.filter(todo => todo.done) || [];

  return doneData;
}

export default doneListState;

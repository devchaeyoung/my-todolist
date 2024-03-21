import React, { useState } from "react";

import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function TodoItem({ todo, isDone, onDelete, onChangeDone, onUpdateTodoText }) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [updateTextItem, setUpdateTextItem] = useState(todo.todo);

  const onChangeUpdateTextItem = e => {
    setUpdateTextItem(e.target.value);
  };

  const onKeyDown = e => {
    if (e.key === "Enter") {
      onUpdateTodoText(todo.id, updateTextItem);
      setIsEditClicked(false);
    }
  };

  const handleClickButton = () => {
    if (isEditClicked) {
      onUpdateTodoText(todo.id, updateTextItem);
      setIsEditClicked(false);
    } else {
      setIsEditClicked(true);
    }
  };

  return (
    <li>
      {isEditClicked ? (
        <Input value={updateTextItem} onChange={onChangeUpdateTextItem} onKeyDown={onKeyDown} />
      ) : (
        <Checkbox
          isChecked={todo.done}
          onChangeChecked={() => {
            onChangeDone(todo.id);
          }}
        >
          {todo.todo}
        </Checkbox>
      )}
      {isDone ? "" : <Button onClick={handleClickButton}>{isEditClicked ? "✔️" : "✏️"}</Button>}
      <Button onClick={() => onDelete(todo.id)}>X</Button>
    </li>
  );
}

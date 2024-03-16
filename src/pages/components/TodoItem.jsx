import React, { useState } from "react";

import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

export default function TodoItem({ todo, onDelete, onChangeDone, onUpdateTodoText }) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [updateTextItem, setUpdateTextItem] = useState(todo.todo);
  const onChangeUpdateTextItem = e => {
    setUpdateTextItem(e.target.value);
  };

  const onKeyUp = e => {
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
        <input value={updateTextItem} onChange={onChangeUpdateTextItem} onKeyUp={onKeyUp} />
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
      <Button onClick={handleClickButton}>{isEditClicked ? "✔️" : "✏️"}</Button>
      <Button onClick={() => onDelete(todo.id)}>X</Button>
    </li>
  );
}

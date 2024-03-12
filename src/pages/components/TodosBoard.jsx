import React from "react";
import { useRecoilValue } from "recoil";

import todoListState from "../../recoil/todos";
import Checkbox from "../../components/Checkbox";

import Button from "../../components/Button";
import styled from "styled-components";

export default function TodosBoard({ onDelete, onChangeDone }) {
  const todos = useRecoilValue(todoListState);

  return (
    <StyledTodoBoard>
      <ul>
        {todos.map(item => {
          return (
            <li key={item.id}>
              <Checkbox
                isChecked={item.done}
                onChangeChecked={() => {
                  onChangeDone(item.id);
                }}
              >
                {item.todo}
              </Checkbox>
              <Button onClick={() => onDelete(item.id)}>X</Button>
            </li>
          );
        })}
      </ul>
    </StyledTodoBoard>
  );
}

const StyledTodoBoard = styled.div`
  flex-grow: 3;
  height: 300px;
  width: 300px;
`;

import React from "react";
import { styled } from "styled-components";

export default function Input(props) {
  return <StyledInput type="text" {...props} />;
}

const StyledInput = styled.input.attrs(props => ({
  type: "text",
  height: props.height || "35px",
  width: props.width || "200px",
}))`
  border-radius: 8px;
  border: 0px;
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 0 15px;
`;

/**
 * 버튼 크기 맞추기
 * 유저 아이디입력했을 때 todo 입력할 수 있게
 * done 체크 될 경우 밑으로 내려가기
 * done 목록은 편집안되게하기
 *
 */

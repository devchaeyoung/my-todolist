import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #786458;
`;
export default function Header(props) {
  return (
    <>
      <StyledH1>TO DO LIST</StyledH1>
      <p>Welcome !{props.name}</p>
    </>
  );
}

import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #786458;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <StyledH1>TO DO LIST</StyledH1>
      <p>Welcome !{props.name}</p>
    </StyledHeader>
  );
}

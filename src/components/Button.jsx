import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  &:hover {
    color: #dbb091;
    background-color: #d25208;
  }
  border: none;
  border: 0px;
  background-color: #ff8946;
  border-radius: 10px;
  padding: 8px 12px;
  color: white;
  margin: 5px;
`;

function Button({ children, size, onClick }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

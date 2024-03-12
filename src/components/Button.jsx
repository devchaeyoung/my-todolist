import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border: 1px solid #ff8946;
  background-color: #ff8946;
  border-radius: 10px;
  padding: 6px 12px;
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

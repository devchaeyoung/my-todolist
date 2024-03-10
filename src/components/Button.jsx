import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 9px;
`;
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

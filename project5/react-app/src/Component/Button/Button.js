import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export { Button };

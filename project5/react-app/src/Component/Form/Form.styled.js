import styled from "styled-components";

const FromStyled = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 25px;
  width: 40%;
  margin: auto;
  box-shadow: 5px 5px 10px grey;

  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export { FromStyled };

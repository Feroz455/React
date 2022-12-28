import styled from "styled-components";

const OverlayStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  #text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1rem;
    color: rgb(14, 13, 13);
    transform: translate(-50%, -50%);
  }
  .center {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 1rem;
    width: 100%;
    margin: auto;
    box-shadow: 5px 5px 10px grey;
    border-radius: 20px;
  }
  .center p {
    padding: 20px;
  }
  .header {
    color: red;
    background: #000;
    text-align: center;
    margin: 2rem;
    border-radius: 20px 20px 0px 0px;
    margin: -16px;
  }
  button.okey {
    width: 20%;
    background-color: #000;
    color: red;
    padding: 5px 5px;
    margin-left: 80%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export { OverlayStyled };

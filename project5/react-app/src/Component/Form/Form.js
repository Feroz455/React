import { useState } from "react";
import { v4 } from "uuid";
import { Button } from "../Button/Button";
import { FromStyled } from "./Form.styled";

export default function Form({
  FromHandlar = (f) => f,
  ValidationCheck = (f) => f,
}) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameFunc = (event) => {
    console.log(event.target.value);
    setEnteredUserName(event.target.value);
  };
  const ageFunc = (event) => {
    console.log(event.target.value);
    setEnteredAge(event.target.value);
  };
  const OnFormSubmit = (event) => {
    event.preventDefault();
    if (
      enteredAge < 0 ||
      enteredUserName.trim().length <= 0 ||
      setEnteredAge.trim().length <= 0
    ) {
      let msg =
        enteredUserName.trim().length <= 0 || setEnteredAge.trim().length <= 0
          ? "(non-empty valeus)"
          : "age < 0";
      ValidationCheck(false, msg);
      return;
    }
    const newUser = {
      id: v4(),
      name: enteredUserName,
      age: enteredAge,
    };
    setEnteredAge("");
    setEnteredUserName("");
    FromHandlar(newUser);
  };
  return (
    <FromStyled>
      <form onSubmit={OnFormSubmit}>
        <label>Username</label>
        <input
          value={enteredUserName}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={nameFunc}
        />
        <label>Age (Years)</label>
        <input
          value={enteredAge}
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your Age"
          onChange={ageFunc}
        />
        <Button>submit</Button>
      </form>
    </FromStyled>
  );
}

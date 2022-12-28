import Data from "./Component/Form/DataHolder";
import Form from "./Component/Form/Form";
import { v4 } from "uuid";
import { useState } from "react";
import Overlay from "./Component/Overlay/Overlay";

function App() {
  const UserData = [
    {
      id: v4(),
      name: "Firoz",
      age: "25",
    },
    {
      id: v4(),
      name: "Maliha",
      age: "19",
    },
  ];
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [User, setUser] = useState(UserData);

  const FromHandlar = (newUser) => {
    console.log(newUser, User);
    setUser((prevUser) => {
      return [newUser, ...prevUser];
    });
  };
  const ValidationCheck = (check, msg = "") => {
    setIsValid(check);
    setMessage(msg);
  };

  return (
    <div className="App">
      <Form FromHandlar={FromHandlar} ValidationCheck={ValidationCheck} />
      {User.map((person) => (
        <Data key={person.id} name={person.name} age={person.age} />
      ))}
      <Overlay
        ValidationCheck={ValidationCheck}
        check={isValid}
        message={message}
      />
    </div>
  );
}

export default App;

import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Route path="/welcome/newUser">
        <p>Welcome, New users</p>
      </Route>
    </section>
  );
};

export default Welcome;

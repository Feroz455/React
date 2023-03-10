import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New user</Link>
      <Routes>
        <Route
          path="new-user"
          element={<p>Welcome, new user!</p>}
        />
      </Routes>
    </section>
  );
};

export default Welcome;

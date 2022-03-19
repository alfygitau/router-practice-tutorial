import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  console.log("auth", auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/")
    console.log(user);
  };
  

  return (
    <div>
      Login page
      <label htmlFor="">
        Username:{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

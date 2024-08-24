import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    console.log("Hello!");
    if(email === "user@email.com" && password ==="password") {
        setIsAuth(true);
        navigate('/login')
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

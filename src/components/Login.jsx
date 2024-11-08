import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };
  return (
    <div>
      <h2 className="text-orange-600">Login</h2>
      <label htmlFor="username">Username</label>
      <input
      className="w-56 h-9 "
      id="username"
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

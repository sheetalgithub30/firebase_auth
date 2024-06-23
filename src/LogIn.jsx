import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => navigate("/home"))
      .catch((err) => alert(err.message));
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div>
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          placeholder="Email"
        />
        </div>
      <div>
      <input
          onChange={(e) => setPass(e.currentTarget.value)}
          type="text"
          placeholder="Password"
        />
      </div>
     
<div id="button">
<input type="submit" value="Login" id="button" />

</div>
      </form>
    </div>
  );
}
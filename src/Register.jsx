import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "./firebase.js";
import Navbar from "./Navbar.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const obj = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(obj.user, {
        displayName: name,
      });
      alert("New User Added Successfully !!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div id="register">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
      <div>
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            placeholder="Name"
          />
        </div>
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
            type="password"
            placeholder="Password"
          />
        </div>
       
        <div id="button">
          <input type="submit" value="SignUp" id="button" />
        </div>
      </form>
    </div>
    </>

  );
}

import React, { useEffect } from "react";
import { auth } from "./firebase";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => alert(err.message));
  };

  console.log(auth.currentUser);

  return (
    <div>
      <h1>Welcome {auth.currentUser && auth.currentUser.displayName} !! </h1>
      {auth.currentUser && 
      <div id="logOut">
      <button onClick={logout}>Logout</button>
      </div>
      }
    </div>
  );
}
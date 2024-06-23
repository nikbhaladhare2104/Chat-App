import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contextProviders/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;

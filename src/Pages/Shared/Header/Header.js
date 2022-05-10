import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="d-flex justify-content-center p-3 fs-4 text-decoration-none bg-primary gap-4">
      <CustomLink as={Link} to={"/"}>
        Home
      </CustomLink>
      <CustomLink as={Link} to={"/blogs"}>
        Blogs
      </CustomLink>
      <CustomLink as={Link} to={"/stock"}>
        Stock
      </CustomLink>
      {user ? (
        <button
          onClick={handleSignOut}
          className="btn text-decoration-none text-white border bg-success"
        >
          Sign Out
        </button>
      ) : (
        <CustomLink as={Link} to={"/login"}>
          Login
        </CustomLink>
      )}
    </div>
  );
};

export default Header;

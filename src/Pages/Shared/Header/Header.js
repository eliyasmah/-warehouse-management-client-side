import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="d-flex justify-content-center p-3 fs-4 text-decoration-none bg-primary gap-4">
      <CustomLink as={Link} to={"/"}>
        Home
      </CustomLink>
      <CustomLink as={Link} to={"/blogs"}>
        Blogs
      </CustomLink>
      <CustomLink as={Link} to={"/login"}>
        Login
      </CustomLink>
    </div>
  );
};

export default Header;

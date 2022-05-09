import React from "react";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="d-flex justify-content-center p-3 fs-4 text-decoration-none bg-primary gap-4">
      <CustomLink to={"/"}>Home</CustomLink>
      <CustomLink to={"/blogs"}>Blogs</CustomLink>
    </div>
  );
};

export default Header;

import React from "react";
import notFound from "../../../images/notFount/404-page.webp";

const NotFound = () => {
  return (
    <div className="text-center">
      <img className="img-fluid" src={notFound} alt="" />
    </div>
  );
};
export default NotFound;

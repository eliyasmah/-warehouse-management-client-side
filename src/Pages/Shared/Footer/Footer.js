import React from "react";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright bg-black text-white py-5 text-center">
      &copy;Copyright-{yearNow}
    </div>
  );
};

export default Footer;

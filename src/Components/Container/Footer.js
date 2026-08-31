import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p> © {new Date().getFullYear()} Dharuv Manchanda. All rights reserved.</p>
      <Link to="mailto:dharuvmanchanda001@gmail.com">👋👋👋👋👋 </Link>
    </div>
  );
};

export default Footer;

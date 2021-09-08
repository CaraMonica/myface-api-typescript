import React from "react";

const NavOption = ({ onClick, href, text, isMobileOnly }) => (
  <li className={"option" + isMobileOnly ? " mobile-option" : ""} onClick={onClick}>
    <a href={href}>{text}</a>
  </li>
);

export default NavOption;

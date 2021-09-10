import React from "react";

const NavOption = ({ onClick, href, text }) => (
  <li className={"option btn"} onClick={onClick}>
    <a href={href}>{text}</a>
  </li>
);

export default NavOption;

import React from "react";
import NavOption from "./NavOption";

const NavOptions = ({ click, closeMobileMenu }) => (
  <ul className={click ? "nav-options active" : "nav-options"}>
    <NavOption onClick={closeMobileMenu} href={"/posts"} text={"Posts"} isMobileOnly={false} />
    <NavOption onClick={closeMobileMenu} href={"/users"} text={"Users"} isMobileOnly={false} />
    <NavOption onClick={closeMobileMenu} href={"/posts/create"} text={"+ New Post"} isMobileOnly={false} />
  </ul>
);

export default NavOptions;

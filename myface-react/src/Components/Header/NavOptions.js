import React from "react";
import NavOption from "./NavOption";

const NavOptions = ({ click, closeMobileMenu }) => (
  <ul className={click ? "nav-options active" : "nav-options"}>
    <NavOption onClick={closeMobileMenu} href={"#"} text={"HOME"} isMobileOnly={false} />
    <NavOption onClick={closeMobileMenu} href={"#"} text={"Posts"} isMobileOnly={false} />
    <NavOption onClick={closeMobileMenu} href={"#"} text={"Users"} isMobileOnly={false} />
    <NavOption onClick={closeMobileMenu} href={"#"} text={"Create Post"} isMobileOnly={true} />
  </ul>
);

export default NavOptions;

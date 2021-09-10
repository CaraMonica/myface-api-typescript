import React, { useState } from "react";
import Logo from "./Logo";
import NavOptions from "./NavOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <Logo />
        <NavOptions click={click} closeMobileMenu={closeMobileMenu} />
      </div>
      <FontAwesomeIcon
        onClick={handleClick}
        icon={click ? faTimes : faBars}
        className={"mobile-menu btn"}
      />
    </div>
  );
};

export default Navbar;

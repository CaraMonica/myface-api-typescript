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
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FontAwesomeIcon icon={faTimes} className="mobile-option"/> : <FontAwesomeIcon icon={faBars} className="mobile-option"/>}
      </div>
    </div>
  );
};

export default Navbar;

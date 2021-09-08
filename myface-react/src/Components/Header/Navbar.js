import React, { useState } from "react";
import Logo from "./Logo";
import NavOptions from "./NavOptions";

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
        {click ? <i className="fas fa-times menu-icon"></i> : <i className="fas fa-bars menu-icon"></i>}
      </div>
    </div>
  );
};

export default Navbar;

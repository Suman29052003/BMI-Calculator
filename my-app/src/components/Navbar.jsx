import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BMI <span className="redSpan">Calculator</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

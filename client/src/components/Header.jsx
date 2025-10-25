import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-auto py-5 flex items-center justify-center border-b">
      <Link to="/">
        <h1 className="text-xl font-semibold">Portfolio Generator</h1>
      </Link>
    </header>
  );
};

export default Header;

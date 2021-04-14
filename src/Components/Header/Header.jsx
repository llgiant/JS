import React from "react";
import s from "./Header.Module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_4.png"
        alt="Logo"
      />
    </header>
  );
};

export default Header;

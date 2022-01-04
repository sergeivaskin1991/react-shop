import React from "react";

function Header() {
  return (
		<nav className="blue-grey darken-1">
    <div className="nav-wrapper">
      <a href="!#" className="brand-logo left">React Shop App</a>
      <ul id="nav-mobile" className="right hide-on-med">
        <li><a href="https://github.com/sergeivaskin1991/react-shop" target="_blank">Repo</a></li>
      </ul>
    </div>
  </nav>
  );
}

export { Header };

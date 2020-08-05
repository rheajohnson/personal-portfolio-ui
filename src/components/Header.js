import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import NavList from "../components/NavList";
import MobileNav from "../components/MobileNav";

export default function Header({ setActive, active }) {
  const [menu, setMenu] = useState(false);

  const setMenuDelay = (state) => {
    setTimeout(() => setMenu(state), 400);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu]);

  return (
    <>
      <header className="header">
        <div
          role="button"
          tabIndex={0}
          className="brand-container"
          onKeyDown={() => setActive(0)}
          onClick={() => setActive(0)}
        >
          <img src={Logo} className="logo" alt="Ryan Johnson - Developer" />
          <div className="name-container">
            <h3>Ryan Johnson</h3>
            <h4>Developer</h4>
          </div>
        </div>
        <NavList setActive={setActive} active={active} />
        <MobileNav setMenu={setMenu} menu={menu} />
      </header>
      <div className={`menu-transition ${menu ? "open" : ""}`}>
        <ul className="nav-mobile-menu">
          <div
            id="close-icon"
            role="button"
            onClick={() => setMenu(false)}
            onKeyDown={() => setMenu(false)}
            tabIndex={0}
          >
            <span></span>
            <span></span>
          </div>
          <li>
            <a
              onClick={() => {
                setActive(0);
                setMenuDelay(false);
              }}
              onKeyDown={() => setActive(0)}
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(1);
                setMenuDelay(false);
              }}
              onKeyDown={() => setActive(2)}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(2);
                setMenuDelay(false);
              }}
              onKeyDown={() => setActive(1)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

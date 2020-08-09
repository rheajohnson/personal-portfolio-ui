import React from "react";

export default function MobileNavMenu({
  setActive,
  setMenu,
  setMenuDelay,
  menu,
}) {
  return (
    <div className={`menu-transition ${menu ? "open" : ""}`}>
      <ul className="nav-mobile-menu">
        <div
          id="close-icon"
          role="button"
          onClick={() => setMenu(false)}
          onKeyDown={() => setMenu(false)}
          tabIndex={0}
        >
          <span />
          <span />
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
        {/* <li>
      <a
        onClick={() => {
          setActive(2);
          setMenuDelay(false);
        }}
        onKeyDown={() => setActive(1)}
      >
        Resume
      </a>
    </li> */}
      </ul>
    </div>
  );
}

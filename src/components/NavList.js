import React from "react";

export default React.memo(function About({ setActive, active }) {
  return (
    <div className="nav">
      <ul>
        <li className={`nav-list-item ${active === 0 && "active"}`}>
          <a
            className="nav-link"
            onClick={() => setActive(0)}
            onKeyDown={() => setActive(0)}
          >
            Work
          </a>
        </li>
        <li className={`nav-list-item ${active === 1 && "active"}`}>
          <a
            className="nav-link"
            onClick={() => setActive(1)}
            onKeyDown={() => setActive(2)}
          >
            About
          </a>
        </li>
        {/* <li className={`nav-list-item ${active === 2 && "active"}`}>
          <a
            className="nav-link"
            onClick={() => setActive(2)}
            onKeyDown={() => setActive(1)}
          >
            Resume
          </a>
        </li> */}
      </ul>
    </div>
  );
});

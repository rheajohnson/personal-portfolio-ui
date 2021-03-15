import React from "react";

export default React.memo(function MainNav({ setActivePage, page }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <div
            className={`nav-item-link ${page === 0 && "active"}`}
            onClick={() => {
              setActivePage(0);
            }}
            onKeyDown={() => setActivePage(0)}
            role="button"
            tabIndex={0}
          >
            Work
          </div>
        </li>
        <li>
          <div
            className={`nav-item-link ${page === 1 && "active"}`}
            onClick={() => {
              setActivePage(1);
            }}
            onKeyDown={() => setActivePage(1)}
            role="button"
            tabIndex={0}
          >
            About
          </div>
        </li>
      </ul>
    </nav>
  );
});

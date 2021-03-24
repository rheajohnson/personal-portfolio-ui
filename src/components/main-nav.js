import React from "react";
import Pdf from "assets/resume.pdf";

export default React.memo(function MainNav({ setActivePage, page }) {
  const onResumeClick = () => {
    window.open(Pdf);
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <div
            className={`nav-item-link ${page === 0 && "active"}`}
            onClick={() => {
              setActivePage(0);
            }}
            onKeyDown={(e) => e.key === "Enter" && setActivePage(0)}
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
            onKeyDown={(e) => e.key === "Enter" && setActivePage(1)}
            role="button"
            tabIndex={0}
          >
            About
          </div>
        </li>
        <li>
          <div
            className={`nav-item-link ${page === 2 && "active"}`}
            onClick={() => {
              setActivePage(2);
            }}
            onKeyDown={(e) => e.key === "Enter" && setActivePage(2)}
            role="button"
            tabIndex={0}
          >
            Contact
          </div>
        </li>
        <li>
          <div
            className={`nav-item-link`}
            onClick={onResumeClick}
            onKeyDown={(e) => e.key === "Enter" && onResumeClick()}
            tabIndex={0}
            role="button"
          >
            Resume
          </div>
        </li>
      </ul>
    </nav>
  );
});

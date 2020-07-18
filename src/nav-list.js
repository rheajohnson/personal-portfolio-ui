import React from "react";

export default React.memo(function About({ setDesired, desired }) {
  return (
    <div className="nav">
      <ul>
        <li>
          <button
            onClick={() => setDesired(0)}
            onKeyDown={() => setDesired(0)}
            className="button-list"
          >
            About
            <div className={`indicator ${desired === 0 && "active"}`} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setDesired(1)}
            onKeyDown={() => setDesired(1)}
            className="button-list"
          >
            Skills
            <div className={`indicator ${desired === 1 && "active"}`} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setDesired(2)}
            onKeyDown={() => setDesired(2)}
            className="button-list"
          >
            Contact
            <div className={`indicator ${desired === 2 && "active"}`} />
          </button>
        </li>
      </ul>
    </div>
  );
});

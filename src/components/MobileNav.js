import React from "react";
// import { Link } from "react-scroll";

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <nav className="nav-mobile">
        <div
          id="nav-icon3"
          role="button"
          onClick={() => this.handleStateChange()}
          onKeyDown={() => this.handleStateChange()}
          tabIndex={0}
          className={`${this.state.menuOpen ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default MobileNav;

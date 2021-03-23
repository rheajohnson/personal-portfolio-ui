import React from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function MobileNav({ setMobileMenuOpen }) {
  return (
    <div
      role="button"
      onClick={() => setMobileMenuOpen(true)}
      onKeyDown={() => setMobileMenuOpen(true)}
      tabIndex={-1}
      className="mobile-nav-icon"
    >
      <MenuOutlined />
    </div>
  );
}

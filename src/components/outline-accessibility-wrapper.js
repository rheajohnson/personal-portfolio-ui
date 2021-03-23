import React, { useEffect, useState } from "react";

export default function OutlineAccessibilityWrapper({ children }) {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => setMouseDown(true));

    document.addEventListener("keydown", () => setMouseDown(false));
  }, []);

  return <div className={mouseDown ? "mousedown" : ""}>{children}</div>;
}

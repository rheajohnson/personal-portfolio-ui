import React, { useEffect, useState } from "react";

export default function AppWrapper({ children }) {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => setMouseDown(true));

    document.addEventListener("keydown", () => setMouseDown(false));
  }, []);

  return (
    <div className={`app ${mouseDown ? "mousedown" : ""}`}>{children}</div>
  );
}

import React from "react";

export default function PageTransition({ loading }) {
  return (
    <div className={`page-transition ${loading ? "loading" : ""}`}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

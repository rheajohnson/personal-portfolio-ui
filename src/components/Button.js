import React from "react";

export default function Button({ label, callback }) {
  return <button onClick={() => callback()}>{label}</button>;
}

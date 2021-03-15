import React from "react";
import Button from "./button";

export default function WorkPost({
  title,
  copy,
  buttonOneLabel,
  buttonTwoLabel,
  image,
  buttonOneLink,
  buttonTwoLink,
}) {
  const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <section className="work-post">
      <div className="work-post-image">
        <img src={image} alt="app1 mock visual" />
      </div>
      <div className="work-post-content">
        <h2>{title}</h2>
        {copy}
        <div className="work-post-content-action">
          <Button
            label={buttonOneLabel}
            callback={() => openInNewTab(buttonOneLink)}
          />
          <Button
            label={buttonTwoLabel}
            callback={() => openInNewTab(buttonTwoLink)}
          />
        </div>
      </div>
    </section>
  );
}

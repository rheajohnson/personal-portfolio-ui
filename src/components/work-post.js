import React from "react";
import Button from "components/button";

export default function WorkPost({
  title,
  copy,
  buttonOneLabel,
  buttonTwoLabel,
  image,
  buttonOneLink,
  buttonTwoLink,
  reverse,
}) {
  const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };
  const renderImage = () => {
    return (
      <div className="work-post-image">
        <img src={image} alt="app1 mock visual" />
      </div>
    );
  };
  return (
    <section
      className={`work-post ${reverse ? "work-post-left" : "work-post-right"}`}
    >
      {reverse && renderImage()}
      <div className="work-post-content">
        <h2>{title}</h2>

        {copy}
        <div className="work-post-content-action">
          <Button
            label={buttonOneLabel}
            callback={() => openInNewTab(buttonOneLink)}
          />
          {buttonTwoLink && (
            <Button
              label={buttonTwoLabel}
              callback={() => openInNewTab(buttonTwoLink)}
            />
          )}
        </div>
      </div>
      {!reverse && renderImage()}
    </section>
  );
}

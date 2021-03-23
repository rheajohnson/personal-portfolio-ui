import React from "react";

export default React.memo(function Contact() {
  return (
    <section className="contact">
      <section className="sub-header">
        <h2>Get in Touch!</h2>
      </section>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="contact-name">
          <div className="contact-name-first">
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="contact-name-last">
            <label htmlFor="fname">Last name</label>
            <input type="text" id="lname" name="lname" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="subject">Message</label>
        <textarea
          name="comment[body]"
          rows="1"
          cols="50"
          wrap="physical"
          id="message"
        />
        <button type="submit" value="Submit">
          Send
        </button>
      </form>
      <footer className="contact-footer">
        <p>
          Or email me directly at{" "}
          <a href="mailto:rjohnsondev@protonmail.com" alt="get-in-touch">
            rjohnsondev@protonmail.com
          </a>
        </p>
      </footer>
    </section>
  );
});

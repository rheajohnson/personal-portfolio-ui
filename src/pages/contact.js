import React, { useState, useEffect } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import sendEmail from "../helper/send-email";

export default React.memo(function Contact() {
  const [formValues, setFormValues] = useState({});
  const [message, setMessage] = useState({
    status: "",
    message: "",
    active: false,
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (message && message.active) {
      setTimeout(() => setMessage({ ...message, active: false }), 10000);
    }
  }, [message]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const requiredFields = ["fname", "lname", "email", "message"];
    for (const requiredField of requiredFields) {
      if (!formValues[requiredField]) return;
    }
    setSending(true);
    const sendEmailResponse = await sendEmail(formValues);
    setMessage({
      status: sendEmailResponse.status,
      message: sendEmailResponse.message,
      active: true,
    });
    setSending(false);
    setFormValues({});
  };

  const renderMessage = () => {
    return (
      <div
        className={`contact-form-message ${message.status} ${message && message.active && "active"
          }`}
      >
        {message.status === "success" ? (
          <CheckCircleOutlined />
        ) : (
          <CloseCircleOutlined />
        )}
        <p>{message.message}</p>
      </div>
    );
  };

  return (
    <section className="contact">
      <section className="sub-header">
        <h2>Get in touch!</h2>
      </section>
      <form className="contact-form" onSubmit={sendMessage}>
        <div className="contact-name">
          <div className="contact-name-first">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              name="fname"
              onChange={handleChange}
              required
              minLength="2"
              value={formValues["fname"] || ""}
            />
          </div>
          <div className="contact-name-last">
            <label htmlFor="fname">Last name</label>
            <input
              type="text"
              name="lname"
              onChange={handleChange}
              required
              minLength="2"
              value={formValues["lname"] || ""}
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          value={formValues["email"] || ""}
        />
        <label htmlFor="subject">Message</label>
        <textarea
          name="message"
          rows="1"
          cols="50"
          wrap="physical"
          onChange={handleChange}
          required
          value={formValues["message"] || ""}
        />

        <button type="submit">{sending ? "Sending..." : "Send"}</button>
      </form>
      <footer className="contact-footer">
        <p>
          Or email me directly at{" "}
          <a href="mailto:rjohnsondev@protonmail.com" alt="get-in-touch">
            rjohnsondev@protonmail.com
          </a>
        </p>
      </footer>
      {renderMessage()}
    </section>
  );
});

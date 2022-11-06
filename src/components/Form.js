// import React from "react"
import { useState } from "react";
import "./Form.css";

// import { FaCheck } from 'react-icons/fa'

const Form = () => {
  const name = "George Imhandegbelo";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [permission, setPermission] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    //prevent page reload on form submit
    e.preventDefault();
    setSubmitted(true);
    if (firstName && lastName && email && message && permission) {
      setSubmitted(false);
      setSuccessMessage(true);
    }

    setTimeout(() => {
      setSuccessMessage(false);
    }, 10000);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPermission(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-inline">
        <div className="form-control">
          <label htmlFor="firstName">First name</label>
          <input
            id="first_name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {submitted && !firstName && (
            <small className="form-field-error">
              Kindly enter a first name
            </small>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last name</label>
          <input
            id="last_name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
          {submitted && !lastName && (
            <small className="form-field-error">Kindly enter a last name</small>
          )}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourname@email.com"
        />
        {submitted && !email && (
          <small className="form-field-error">
            Kindly enter an email address
          </small>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
        {submitted && !message && (
          <small className="form-field-error">Kindly enter a message</small>
        )}
      </div>

      <div className="form-control form-control-check">
        <div>
          <input
            id="checkbox"
            name="agreement"
            type="checkbox"
            checked={permission}
            value={permission}
            onChange={(e) => setPermission(e.currentTarget.checked)}
          />
          {submitted && !permission && (
            <small className="form-field-error">
              Check to send
            </small>
          )}
        </div>
        <div className="check-text-container">
          <label htmlFor="agreement" className="check-test">
            You agree to providing your data to {name} who may contact you
          </label>
        </div>
      </div>

      <button id="btn__submit" className="btn btn-primary" value="Send Message">
        Send Message
      </button>
      {successMessage && (
        <small className="form-success"> Message Sent Successfully</small>
      )}
    </form>
  );
};

export default Form;

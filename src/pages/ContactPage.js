import React from "react";
import "./ContactPage.css";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1>Contact Me</h1>
            <p className="hello">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="contact-body">
            <Form />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactPage;

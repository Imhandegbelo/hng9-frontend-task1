import React from "react";
import slack from "../../assets/img/slack.png";
import github from "../../assets/img/github.png";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <>
        <section id="links">
          <div className="link">
            <a href="https://twitter.com/ImhandegbeloG" className="anchor_btn">
              Twitter Link
            </a>
            <a
              href="https://training.zuri.team/"
              id="btn__zuri"
              className="anchor_btn"
            >
              Zuri Team
            </a>
            <a
              href="http://books.zuri.team"
              id="books"
              className="anchor_btn"
              title="This is where you find books about design and coding"
            >
              Zuri Books
            </a>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=Georgex"
              id="book__python"
              className="anchor_btn"
            >
              Python Books
            </a>
            <a
              href="https://background.zuri.team"
              id="pitch"
              className="anchor_btn"
            >
              Background Check for Coders
            </a>
            <a
              href="https://books.zuri.team/design-rules"
              id="book__design"
              className="anchor_btn"
            >
              Design Books
            </a>
            <a href="/contact" id="contact" className="anchor_btn">
              Contact Me
            </a>
          </div>
        </section>
        <section id="social">
          <div className="socialIcon">
            <img src={slack} alt="" />
            <img src={github} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Body;

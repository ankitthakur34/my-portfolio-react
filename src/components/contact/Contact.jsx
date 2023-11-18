import React, { useRef ,useContext} from "react";
import "./Contact.css";
import fb from "../../assets/facebook-icon.png";
import insta from "../../assets/instagram.png";

import yt from "../../assets/youtube.png";
import con from "../../assets/contact2.gif";

import twi from "../../assets/twitter.png";

import emailjs from "@emailjs/browser";
import { Theme } from "../../context/Context";


const Contact = () => {
  const { light } = useContext(Theme);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q96oukb",
        "template_97ys5h8",
        form.current,
        "ub6jja2UwANYD1BIQLPQ-"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("kindly mail us at ankitst6268@gmail.com");
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          alert("kindly mail us at ankitst6268@gmail.com");
        }
      );
  };

  return (
    <section id="contact" style={{ color: light?"#9933FF":"white" }}>
      <div className="contactDiv">
        <h1 className="heading">Contact Me</h1>
        <span className="para">
          Please fill out this form below to discuss work opportunities...
        </span>
        <span className="para1">
          You Can reach out to me at - ankitst6268@gmail.com
        </span>

        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="your Name"
            className="name"
            name="user_name"
          />
          <input
            type="email"
            placeholder="your Email"
            className="email"
            name="user_email"
          />

          <textarea
            type="message"
            placeholder="your Msg"
            className="msg"
            name="message"
            rows={5}
          />

          <button 
          style={{backgroundColor : light? "grey":"white" }}
          
           type="submit" value="send" className="formBtn">
            Submit
          </button>
        </form>
      </div>
      {/* <img src={con} alt="contact" className="contact1" /> */}
    </section>
  );
};

export default Contact;

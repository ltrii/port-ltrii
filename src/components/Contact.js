import React, { useContext } from "react";
import globalContext from "../context/global/globalContext";
import "../assets/css/contact.css";

import ReactContactForm from "react-mail-form";

// import nodemailer from "nodemailer";

import linked from "../assets/img/linked.png";
// import twitter from "../assets/img/twitter.png";
import gitimg from "../assets/img/github.png";

// var transport = nodemailer.createTransport({
//   auth: {
//     user: "lelandrogers@gmail.com",
//     pass: process.env.REACT_APP_GOOGLE_PASS
//   }
// });

export default function Contact(props) {
  const globState = useContext(globalContext);

  // const [from, setFrom] = useState("");
  // const [subject, setSubject] = useState("");
  // const [body, setBody] = useState("");

  // const sendMessage = e => {
  //   e.preventDefault();
  //   var message = {
  //     from: from,
  //     to: "lelandtr@gmail.com",
  //     subject: subject,
  //     text: body
  //   }

  //   try {
  //     transport.sendMail(message)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  if (globState.state.open === false) {
    return <div></div>;
  } else {
    return (
      <div className="contact slide-in-top">
        <div id="blocker"></div>
        <div className="contactGrid">
          <div className="forOther">
            <div id="socials">
              <a id="cntct" href="https://www.linkedin.com/in/leland-rogers/">
                <img src={linked} alt="LinkedIn" />
                <div id="contactName">LinkedIn</div>
              </a>
              {/* <a id="cntct" href="https://twitter.com/_ltrii">
                <img src={twitter} alt="Twitter" />
                <div id="contactName">Twitter</div>
              </a> */}
              <a id="cntct" href="https://github.com/ltrii">
                <img src={gitimg} alt="GitHub" />
                <div id="contactName">Github</div>
              </a>
            </div>
          </div>
          <div id="contactForm">
            <ReactContactForm
              to="lelandtr@gmail.com"
              titlePlaceholder="Subject"
            />
            {/* <form onSubmit={sendMessage}>
              <label>Your Email</label>
              <input required type="email" name="Your Email" value={from} onChange={e => setFrom(e.target.value)} />
              <label>Subject</label>
              <input required type="text" name="Subject" value={subject} onChange={e => setSubject(e.target.value)}/>
              <label>Body</label>
              <textarea required type="email" name="Body" value={body} onChange={e => setBody(e.target.value)} />
              <button>Submit</button>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}

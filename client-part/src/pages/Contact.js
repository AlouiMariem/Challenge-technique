import React from "react";
import me from "../assets/me1.png";

import "../css/Contact.css";
import { GoMail, GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="container mt-3">
        <div className="d-flex  mt-3">
          <img className="mr-3" src={me} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Aloui Mariem</h3>
            </div>
            <br />
            <br />
            <h4>Contact  :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:mayank.singh1_cs18@gla.ac.in"
            >
              <h5>{<GoMail />} : alouimariem80@gmail.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AlouiMariem"
            >
              <h5>{<GoMarkGithub />} : AlouiMariem</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mariem-aloui-969b1a158/"
            >
              <h5>{<GrLinkedin />} : Mariem Aloui</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used in this project : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
            I am a software engineer hardworking Offers a strong background in creative problem-solving and a proven
              ability to multi-task and prioritize in fast-paced, stressful environments.
            </p>
          </div>
        </div>
        <hr />
    </div>
  );
}

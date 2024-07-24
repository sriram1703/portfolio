import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sriram M </span>
            from <span className="purple">Rajapalayam, India.</span>
            <br />
            I am currently employed as a Front-End Developer at Savic Company.
            <br />
            I have completed a Bachelor of Science in Computer Science at Kalasalingam Academy of Research and Education.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games with State Certificate
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sriram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mine.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about web development and proficient in HTML, CSS, JavaScript, and React.js. My expertise lies in creating responsive and user-friendly interfaces, including e-commerce websites and dynamic apps like weather applications. 
              <br />
              <br />I am skilled in integrating <i>
                <b className="purple">Node.js</b> and <b className="purple">Express.js</b> for backend functionality
              </i> and utilize <i>
                <b className="purple">Bootstrap</b> for responsive design.
              </i>
              <br />
              <br />Currently, as a Front-End Developer, I contribute to customer portal projects and collaborate with cross-functional teams to create innovative web solutions.
              <br />
              <br />I am always eager to apply my skills in modern JavaScript libraries and frameworks to build cutting-edge web technologies and products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius:'200px'}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sriram-m-2592a4295/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

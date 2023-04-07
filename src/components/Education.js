import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Education() {
  return (
    <section className="project" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Certification</h2>
                  <h4>
                    <p>
                      <Table striped variant="dark">
                        <tbody>
                          <tr>
                            <td>
                              Full Stack Developement (MERN) course in "GUVI"
                            </td>
                            <td>AUG 2022 to JAN 2023</td>
                            <td>
                              <a
                                href="http://bit.ly/3Ml2Tub"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Certificate
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Codekata Winner in "GUVI"</td>
                            <td>1st JAN 2023 to 15th JAN 2023</td>
                            <td>
                              <a
                                href="https://bit.ly/3UiqPAi"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Certificate
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </p>
                  </h4>
                  <h2>Education</h2>
                  <p>
                    <Table striped variant="dark">
                      <tbody>
                        <tr>
                          <td>
                            B.Ed (Computer Science)
                            <br />
                            C.M.Annamalai College of Education
                            <br />
                            Tamilnadu Teachers Education University - Chennai
                          </td>
                          <td>
                            Percentage: 85.6
                            <br />
                            July 2021
                          </td>
                        </tr>
                        <tr>
                          <td>
                            M.Tech Information Technology
                            <br />
                            College of Engineering Guindy Campus
                            <br />
                            Anna University – Chennai.
                          </td>
                          <td>
                            CGPA: 7.3 <br />
                            April 2019
                          </td>
                        </tr>
                        <tr>
                          <td>
                            B. Tech Information Technology
                            <br />
                            Sri venkateswara college of engineering
                            <br />
                            Anna University – Chennai.
                          </td>
                          <td>
                            CGPA: 6.44
                            <br />
                            May 2017
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Class 12 SRK – BHEL hr sec school
                            <br />
                            (STAE BOARD)
                            <br />
                            RANIPET, VELLORE Dt.
                          </td>
                          <td>
                            Percentage: 67.58
                            <br />
                            April 2013
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Class 10 Govt higher secondary school
                            <br />
                            (STATE BOARD)
                            <br />
                            RENDADI, VELLORE Dt.
                          </td>
                          <td>
                            Percentage: 82.4
                            <br />
                            May 2011
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
}

export default Education;

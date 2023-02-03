import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import vsCode from "../assets/img/skills/vscode.svg";
import vsCodeAlt from "../assets/img/skills/vscode-alt.svg";
import react from "../assets/img/skills/react.svg";
import redux from "../assets/img/skills/redux.svg";
import php from "../assets/img/skills/php.svg";
import nodeJS from "../assets/img/skills/node-js.svg";
import mysql from "../assets/img/skills/mysql.svg";
import mongodb from "../assets/img/skills/mongodb.svg";
import javascript from "../assets/img/skills/javascript.svg";
import html from "../assets/img/skills/html-5.svg";
import express from "../assets/img/skills/expressjs2.png";
import css from "../assets/img/skills/css.svg";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import hardware from "../assets/img/skills/hardware.svg";
import hard from "../assets/img/skills/hard.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A Mern stack developer is expected to develop JavaScript
                applications through the use of below skills. <br></br> I can
                design multiple layers of applications when working
                cross-functionally over various infrastructures.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1300}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={hard} alt={hardware} />
                  <h5>Hardware TroubleShooting</h5>
                </div>
                <div className="item">
                  <img src={vsCode} alt={vsCodeAlt} />
                  <h5>vsCode</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image1" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image2" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image3" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image4" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodeJS} alt="Image5" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image7" />
                  <h5>ExpressJS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image8" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image9" />
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image13" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image10" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image11" />
                  <h5>BootStrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image12" />
    </section>
  );
}
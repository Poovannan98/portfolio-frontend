import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Blog.png";
import projImg2 from "../assets/img/Chat.png";
import projImg3 from "../assets/img/EMS.png";
import projImg4 from "../assets/img/ECOM.png";
import projImg5 from "../assets/img/MJ.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blog App",
      description: "Blog app using MERN Stack in CURD Operation and Multer for uploading images to DB.",
      imgUrl: projImg1,
      live: "https://poo-blog.netlify.app",
      frontend: "https://github.com/Poovannan98/blog-app-client",
      backend: "https://github.com/Poovannan98/Blog-app-Server",
    },
    {
      title: "Chat App",
      description: "Chat app using MERN Stack in Socket.io for receving and sending messages to user and user name and room id saved in the DB. ",
      imgUrl: projImg2,
      live: "https://poo-chat.netlify.app",
      frontend: "https://github.com/Poovannan98/Chat-app-client",
      backend: "https://github.com/Poovannan98/Chat-app-Server",
    },
    {
      title: "Expense Management System",
      description: "Expense Management System using MERN Stack in CURD Operation, for the user can see the income and expense of their statment in graphical and table view.",
      imgUrl: projImg3,
      live: "https://poo-ems.netlify.app/login",
      frontend: "https://github.com/Poovannan98/Expense-Management-system-client",
      backend: "https://github.com/Poovannan98/Expense-Management-system-Server",
    },
    {
      title : "E-Commerce APP",
      description : "E-Commerce APP of CRM using MERN Stack in all CURD Operation and Multer for uploading images and Paypal for payment gateway via BrainTree in NodeJS. ",
      imgUrl: projImg4,
      live: "https://poo-e-com.netlify.app",
      frontend: "https://github.com/Poovannan98/E-Commerce_client",
      backend: "https://github.com/Poovannan98/E-Commerce_Server",
    },
    {
      title : "MJ-Photography APP",
      description : "MJ-Photography App is an Photography based landing page. This app is a bussiness based and advertisement purpose, I gifted this app to my lovable brother for improving her productivity and chances. ",
      imgUrl: projImg5,
      live: "https://mj-photo.netlify.app",
      frontend: "https://github.com/Poovannan98/mj-photography",
      backend: "https://github.com/Poovannan98/mj-photography-server",
    }
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    MERN stack is a collection of technologies that enables
                    faster application development. It is used by developers
                    worldwide. The main purpose of using MERN stack is to
                    develop apps using JavaScript only. This is because the four
                    technologies that make up the technology stack are all
                    JS-based. MongoDB, Express, React, and Node. js are all part
                    of the MERN Stack. It was created to speed up and improve
                    the development process. All these four powerful techniques
                    provide an end-to-end architecture for creating MERN stack
                    open-source projects such as online apps.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Web Development Projects
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
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
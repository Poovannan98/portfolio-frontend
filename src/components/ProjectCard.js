import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, live, frontend, backend }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="pro" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          <div className="project-text">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="vvd">
                <span>Live</span>
              </button>
            </a>
            <a
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="vvd">
                <span>FrontEnd Code</span>
              </button>
            </a>
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="vvd">
                <span>BackEnd Code</span>
              </button>
            </a>
            
          </div>
        </div>
      </div>
    </Col>
  );
}
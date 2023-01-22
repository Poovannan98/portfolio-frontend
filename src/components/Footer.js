import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/poo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import GitHub from "../assets/img/github.svg";
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/poovannan-m-8b67b6115/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/poovannan.jaga"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/poovannan098"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Poovannan98"><img src={GitHub} alt="Icon" /></a>
              
            </div>
            <h3><BsWhatsapp/> 9943790706</h3>
            <h3><BiMailSend/> poovannan098@gmail.com</h3>                        
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
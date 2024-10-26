import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm={12} className="text-center"></Col>
          <Col sm={12} className="text-center">
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/ziying-zheng/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/ziying-zheng">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

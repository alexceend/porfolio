import React from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/navbar.module.scss'

function NavbarFunc() {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth"});
    }
  
    return (
    <Navbar expand="lg" id={styles["navbar"]}>
      <Container>
        <Row>
          <Col>
            <Nav.Link onClick={() => scrollToSection('myProjects')}>Proyectos</Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={() => scrollToSection('myLinks')}>Links</Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
    );
}

export default NavbarFunc;
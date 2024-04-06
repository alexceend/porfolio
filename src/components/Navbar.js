import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/navbar.module.scss'

function NavbarFunc() {
    return (
    <Navbar expand="lg" id={styles["navbar"]}>
      <Container>
        <Row>
          <Col>
            <Nav.Link href="#content">Proyectos</Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#home">Links</Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
    );
}

export default NavbarFunc;
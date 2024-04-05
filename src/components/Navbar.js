import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from '../styles/navbar.module.scss'

function NavbarFunc() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary" id={styles["navbar"]}>
      <Container>
        <Row>
            <Nav.Link href="#content">Proyectos</Nav.Link>
            <Nav.Link href="#home">Links</Nav.Link>
        </Row>
      </Container>
    </Navbar>
    );
}

export default NavbarFunc;
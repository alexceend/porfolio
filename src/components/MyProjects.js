import React from "react";
import { Container, Col, Row, Image} from "react-bootstrap";
import DannysFrogImage from '../assets/dannysfrog.png'

import styles from '../styles/myProjects.module.scss'

function MyProjects() {
    return (
        <Container id={styles["containers"]}>
          <Row>
            <Col>
              <Image src={DannysFrogImage} alt="dannys frog image" id={styles["photo"]} />
            </Col>
            <Col id={styles["details"]}>
              <h1>DANNY'S FROG</h1>
              <p>Juego desarrollado en java con la idea de un amigo mio, Dani</p>
              <a href="https://github.com/alexceend/RanitaDeDani" target="_blank">GitHub</a>
            </Col>
          </Row>
        </Container>
    );
}

export default MyProjects;
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
            <Col>
              <p id={styles["details"]}>holap</p>
            </Col>
          </Row>
        </Container>
    );
}

export default MyProjects;
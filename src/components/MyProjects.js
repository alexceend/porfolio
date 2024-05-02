import React from "react";
import { Container, Col, Row, Image} from "react-bootstrap";
import DannysFrogImage from '../assets/dannysfrog.png'
import DannysFrogImageGif from '../assets/dannysfrog.gif'
import JojosImage from '../assets/jojos.png'

import styles from '../styles/myProjects.module.scss'

function MyProjects() {
    return (
        <Container id={styles["containers"]}>
          <Row id={styles["Row"]}>
            <Col>
              <Image src={DannysFrogImage} alt="dannys frog image" id={styles["photo"]} />
            </Col>
            <Col id={styles["details"]}>
              <h1>DANNY'S FROG</h1>
              <p>Juego desarrollado en java con la idea de un amigo mio, Dani</p>
              <a href="https://github.com/alexceend/RanitaDeDani" target="_blank">GitHub</a>
              <a href="https://alexceend.itch.io/dannys-frog" target="_blank">itch.io</a>
            </Col>
          </Row>
          <Row id={styles["Row"]}>
            <Col>
              <Image src={JojosImage} alt="joses image" id={styles["photo"]} />
            </Col>
            <Col id={styles["details"]}>
              <h1>JOSE'S BIZARRE ADVENTURE</h1>
              <p>Juego desarrollado en java para una JAM</p>
              <a href="https://github.com/alexceend/jojo-bird" target="_blank">GitHub</a>
              <a href="https://alexceend.itch.io/joses-bizarre-adventure" target="_blank">itch.io</a>
            </Col>
          </Row>
        </Container>
    );
}

/*              <Image src={DannysFrogImage} alt="dannys frog image" id={styles["photo"]} 
              onMouseOver={e => (e.currentTarget.src = {DannysFrogImageGif})}
              onMouseOut={e => (e.currentTarget.src = {DannysFrogImage})} />*/

export default MyProjects;
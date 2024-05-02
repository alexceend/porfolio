import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ReactComponent as InstaSvg} from '../assets/instagram.svg';
import { ReactComponent as TwitterSvg} from '../assets/twitter.svg';

import styles from '../styles/myLinks.module.scss'

function MyLinks() {
    return (
        <Container id={styles["containers"]}>
            <Row id={styles["Row"]}>
                <Col>
                    <a href="https://twitter.com/alexceend" target="_blank">
                        <TwitterSvg id={styles["image"]}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://instagram.com/alexceend" target="_blank" >
                        <InstaSvg id={styles["image"]}/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default MyLinks;
import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ReactComponent as InstaSvg} from '../assets/instagram.svg';
import { ReactComponent as TwitterSvg} from '../assets/twitter.svg';

import styles from '../styles/myLinks.module.scss'

// 音频将保存于: C:\Users\Alex\.vscode\音频文件夹的相对路径


function MyLinks() {
    return (
        <Container id={styles["containers"]}>
            <Row id={styles["RowDots"]}>
                <Col>
                    <h1>.</h1>
                </Col>
                </Row>
            <Row id={styles["RowDots"]}>
                <Col>
                    <h1>.</h1>
                </Col>
            </Row>
            <Row id={styles["RowMain"]}>
            <Col>
                    <h1>My socials!</h1>
                </Col>
            </Row>
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
import React from "react";
import Introduction from '../Introduction.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../../styles/home.scss';


export default function Home() {
  
  return (
    //<Test />
    <div id="bg">
        <Container>
            <Row>
                <Col>
                    <Introduction />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

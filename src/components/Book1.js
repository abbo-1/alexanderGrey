import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import cover from '../images/cover1.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Book1() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
        <Container>
        <Row>
        <Col>
        <img src={cover} />
        </Col>
        <Col>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src={cover}
            alt="First slide"
            /> */}
                <Carousel.Caption>
                    <h3 class='text'>First slide label</h3>
                    <p>number 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
            </Col>
            </Row>
</Container>

</div>

    )
}

export default Book1
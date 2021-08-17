import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import cover from '../images/cover1.png'
import amazon from '../images/amazonBtn.png'
import barnes from '../images/barnesBtn.png'
import card from '../images/card.png'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Book1() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div class="margin">
        <Container>
        <Row >
        <Col xs={12} md={4}>
        <img src={cover} class="cover" alt="Far Side of Silence Cover" />
        </Col>
        <Col xs={12} md={8}>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('<h1>THE FAR SIDE OF SILENCE</h1>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .start();
            }}
    />
        {/* <h1>THE FAR SIDE OF SILENCE</h1> */}
        <p>
        When Air Force One is shot down over the Mediterranean Sea with no survivors ex-Navy Seal Alexander Gray is tasked with an impossible assignment.
        </p>
        <p>
        The new president secretly orders the U.S. Navy to prepare the Sigonella Naval Air Station on Sicily for a clandestine and experimental operation to save the life of the Russian president, the man most Americans believe responsible for the downing of Air Force One.
        </p>
        <p>
        Antagonistic forces within the U.S. and Russian governments are determined to prevent that operation from taking place. From the U.S. to Sigonella, Gray must evade and outwit those working against the president.
        </p>
        <p>
        Will Gray survive to bring the traitors to justice and execute the daring operation?
        </p>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={card}
            alt="First slide"
            />
                <Carousel.Caption>
                    <h3 class='text'>First slide label</h3>
                    <p>number 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
      className="d-block w-100"
      src={card}
      alt="First slide"
    />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
      className="d-block w-100"
      src={card}
      alt="First slide"
    />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
            <a target="_blank" href="https://www.amazon.com/Far-Side-Silence-Robert-Marcus/dp/0988954257/">
            <img src={amazon} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            <a target="_blank" href="https://www.barnesandnoble.com/w/the-far-side-of-silence-robert-b-marcus/1116050368" >
            <img src={barnes} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            </Col>
            </Row>
</Container>

</div>

    )
}

export default Book1
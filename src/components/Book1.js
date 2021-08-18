import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import cover from '../images/cover1.png'
import amazon from '../images/amazonBtn.png'
import barnes from '../images/barnesBtn.png'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import star from '../images/star.png'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Book1() {


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
            typewriter.typeString('<span class="title">THE FAR SIDE OF SILENCE</span>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .start();
            }}
    />
        <div class="redline" />
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

        <Carousel plugins={['arrows']}>
        <img class="card" src={card1} />
        <img class="card" src={card2} />
        <img class="card" src={card3} />
        <img class="card" src={card4} />
        </Carousel>
        </Col>
            </Row>
            <div class="break"/>
            <div class="redline" />


            <Row>
        <Col xs={12} md={6}>
            <div class="buyBtns">
            <a target="_blank" href="https://www.amazon.com/Far-Side-Silence-Robert-Marcus/dp/0988954257/">
            <img src={amazon} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            </div>
        </Col>
        <Col xs={12} md={6}>
        <div class="buyBtns">
            <a target="_blank" href="https://www.barnesandnoble.com/w/the-far-side-of-silence-robert-b-marcus/1116050368" >
            <img src={barnes} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            </div>
            </Col>
            </Row>
</Container>

</div>

    )
}

export default Book1
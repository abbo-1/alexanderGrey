import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import cover from '../images/cover3.png'
import amazon from '../images/amazonBtnDisab.png'
import barnes from '../images/barnesBtnDisab.png'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Book3() {


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
            typewriter.typeString('<span class="title">TOMORROWS DESTINY</span>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .start();
            }}
    />
        <div class="redline" />
        <p>
        Stay tuned for more information on the thrilling conclusion to 'The Far Side of Silence' trilogy!
        </p>

        {/* <Carousel plugins={['arrows']}>
        <img class="card" src={card5} />
        <img class="card" src={card2} />
        </Carousel> */}
        </Col>
            </Row>
            <div class="break"/>
            <div class="redline" />


            <Row>
        <Col xs={12} md={6}>
            <div class="buyBtns">
            {/* <a target="_blank" href="https://www.amazon.com/Yesterdays-Tears-Robert-B-Marcus/dp/1635358418/"> */}
            <img src={amazon} class="resizeBtnsDisab" alt='Barnes and Noble Button' />
            {/* </a> */}
            </div>
        </Col>
        <Col xs={12} md={6}>
        <div class="buyBtns">
            {/* <a target="_blank" href="https://www.barnesandnoble.com/w/yesterdays-tears-robert-b-marcus/1126065391" > */}
            <img src={barnes} class="resizeBtnsDisab" alt='Barnes and Noble Button' />
            {/* </a> */}
            </div>
            </Col>
            </Row>
</Container>

</div>

    )
}

export default Book3
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import cover from '../images/cover2.png'
import amazon from '../images/amazonBtn.png'
import barnes from '../images/barnesBtn.png'
import card5 from '../images/card5.png'
import card2 from '../images/card2.png'



import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Book2() {


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
            typewriter.typeString('<span class="title">YESTERDAYS TEARS</span>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .start();
            }}
    />
        <div class="redline" />
        <p>
        Alexander Gray returns from Sigonella with a heavy heart. While in Sicily, he lost the love of his life and came close to losing his own. But there's no time to relax as Gray discovers that those who sought to destroy the U.S. in Sicily are now at work on American soil- with even more sinister plans.
        </p>
        <p>
        While investigating the diabolical plot, he finds himself up against a scheme over 2000 years in the making and discovers all is not what it seems. With the help of his friends and fellow agents, he sets out to stop the enemy and uncover the truth that will change his life forever.
        </p>
        <p>
        Who is The Shepard? Who are the Cotorie and what do they want? Is Allison really dead?
        </p>

        <Carousel plugins={['arrows']}>
        <img class="card" src={card5} />
        {/* <img class="card" src={card2} /> */}
        </Carousel>
        </Col>
            </Row>
            <div class="break"/>
            <div class="redline" />


            <Row>
        <Col xs={12} md={6}>
            <div class="buyBtns">
            <a target="_blank" href="https://www.amazon.com/Yesterdays-Tears-Robert-B-Marcus/dp/1635358418/">
            <img src={amazon} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            </div>
        </Col>
        <Col xs={12} md={6}>
        <div class="buyBtns">
            <a target="_blank" href="https://www.barnesandnoble.com/w/yesterdays-tears-robert-b-marcus/1126065391" >
            <img src={barnes} class="resizeBtns" alt='Barnes and Noble Button' />
            </a>
            </div>
            </Col>
            </Row>
</Container>

</div>

    )
}

export default Book2
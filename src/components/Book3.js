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
            typewriter.pasteString('<span class="title">TOMORROWS DESTINY</span>')
    
            .callFunction(() => {
                console.log('String typed out!');
            })
            .start();
            }}
    />
        <div class="redline" />
        <p>
        After three years in hiding, Alexander Gray is back the United States. Though the oil crisis is easing, Thomas Springer is still president and he issues a warrant for Gray's arrest.
        </p>
        <p>
        To make matters worse, The Shepard and his Coterie are also trying to hunt him down- willing to use any means neccessary to prevent him finding the book 'On Kingship' written over 2000 years ago.
        </p>
        <p>
        But Gray isn't alone- he and his friends are determined to find it first and end the reign of the Coterie. From the United States, to Ireland, then Crete, and finally Nova Scotia, Gray and the Coterie will chase each other in a thrilling life and death game of cat and mouse in which only one will survive.
        </p>
        <p>
        Will President Springer and the Coterie prevail? Or will Gray? Find out later this year when 'Tomorrow's Destiny' hits online retailers!
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
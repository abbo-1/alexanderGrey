import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Typewriter from 'typewriter-effect';

import Redacted from '../images/redacted.png'
import amazon from '../images/amazonBtn.png'


function Title() {
    return (
    <div class="marginTitle">
        <Container>
            <Row>
                <Col xs={12} md={4}>
                <img src={Redacted} class="cover" alt='Redacted Photo - A. Gray' />
                </Col>
                <Col xs={12} md={8}>
                    <h2 style={{fontWeight: "bold"}}>NAME:
                    <div class="redline" />
                    <div style={{fontWeight: "normal"}}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span>Alexander Gray</span>')
                        
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .start();
                            }}
                    />
                    </div>
                    </h2>
                    
                    <h2 style={{fontWeight: "bold"}}>CODENAME:
                    <div class="redline" />
                    <div style={{fontWeight: "normal"}}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span id="title"">Sockdolager</span>')
                        
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .start();
                            }}
                    />
                    </div>
                    </h2>

                    <h2 style={{fontWeight: "bold"}}>SKILLS:
                    <div class="redline" />
                    <div style={{fontWeight: "normal"}}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span id="title"">Master Marksman. Expert Tactician. Hand-to-Hand Combat Proficiency. Extensive Medical Training. High Pain Tolerance.</span>')
                        
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .start();
                            }}
                    />
                    </div>
                    </h2>

                <p>Plops</p>
                </Col>
            </Row>

        </Container>
        </div>
    )
}

export default Title;
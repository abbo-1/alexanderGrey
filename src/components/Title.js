import React, { useState } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Typewriter from 'typewriter-effect';

import Redacted from '../images/redacted.png'

function Title() {
    const [show, setShow] = useState(false);

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
                            typewriter.pauseFor(4000)
                            .typeString('<span id="title"">Sockdolager</span>')
                        
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
                            typewriter.pauseFor(6500)
                            .typeString('<span id="title"">Master Marksman. Expert Tactician. Hand-to-Hand Combat Proficiency. Extensive Medical Training. High Pain Tolerance.</span>')
                        
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .start();
                            }}
                    />
                    </div>
                    </h2>
                <>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Personal Biography
                </Button>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="marginModal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Alexander Gray. In His Own Words
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    I was born on May 26, 1972 in the pleasant little college town of Gainesville, Florida. I was the first of two children- my sister Carol being born three years later. Our childhood was a happy one. My parents ran and owned an antique store in Micanopy, Florida. Carol and I spent hours playing at the store, eventually moving on to helping run it.
                    </p>
                    <p>
                    I went to Micanopy High School where I played baseball and was known for a blazing fast ball. By the time I was a senior I had the school record in strike outs and ERA. I was offered a scholarship at the University of Florida. During our last game for the state championship, I had a three and two count on the cleanup hitter in the last inning. I bore down on the pitch and felt a sharp pain. My future in baseball was over.
                    </p>
                    <p>
                    I attended the University of Florida and graduated in 1994. It was there that I met and fell in love with Allison Bishop. She was beautiful and sweet and everything you could ever want in a woman.
                    </p>
                    <p>
                    I thought I had life all planned out, i'd go to medical school, marry Allison, and live happily ever after. Neat and easy.
                    </p>
                    <p>
                    I  went to Emory Medical School. Allison came with me. She attended Georgia Tech Graduate School. Everything was wonderful. With three months until graduation my sister Carol came up from Florida to visit us.
                    </p>
                    <p>
                    While Allison was at work and I was at school, Carol walked down to the store to buy some milk. Some punk by the name of Hank Dugan followed her home, raped, and then killed her. I was devastated. Dugan was picked up hours later back at the store- drunk. He admitted killing Carol almost as soon as he was in cuffs.
                    </p>
                    <p>
                    Somwhow I managed to get through my last classes and graduated. As I began my residency my relationship with Allison deteriorated. Dugan was acquitted due to not having his miranda rights given to him when he was arrested. When he walked out of the court room a free man, he looked at me and smiled.
                    </p>
                    <p>
                    One month later I was on call at the hospital. I had been there for 28 hours due to another doctor calling in sick. I was tired. I turned off my beeper and found a bed where I fell asleep. A nurse found me and told me I was needed and I told her to get out. Later my boss came in and told him I quit. I went home and packed my bag and left. I didn’t even leave a note for Allison.
                    </p>
                    <p>
                    Two weeks later Hank Dugan ran into a knife. More than once. I decided to leave town to avoid questions. I drove to Jacksonville and joined the Navy. During boot camp I was tested and tested and tested again. I wanted to be a SEAL. Before long I was at BUD/S (Basic Underwater Demolition/Seals) training.
                    </p>
                    <p>
                    The first seven weeks was physical training. The fourth week is appropriately called hell week. Five and a half days of twenty hour work days damn near killed me. I ran 217 miles during the week. It was grueling.
                    </p>
                    <p>
                    After graduation I spent my time with the teams. I went to places in Iraq and Afghanistan that no one would want to be within fifty miles of. Including the people that lived there.
                    </p>
                    <p>
                    After my tour was up, I stayed in Iraq. I decided to become a mercenary. I was hired by a man named Abdul Aziz. I was told he was fighting Al-Qadea. He was. He was also fighting anyone who had money. Basically he was thief- a brutal, blood thirsty thief at that. He kept a chest in a guarded tent with his gains.
                    </p>
                    <p>
                    I watched him kill and he enjoyed it. I soon understood why he was called the Scorpion. I was thinking of leaving when he attacked an American convoy and kidnapped an American Senator named Theodore Anderson.
                    </p>
                    <p>
                    Aziz planned to ransom him for ten million dollars. I knew that Aziz would give them a three day deadline and then kill him. The stupid ass didn’t realize that no one in the American government could scratch an itch on their back in three days, much less come up with ten million dollars.
                    </p>
                    <p>
                    Since I was leaving anyway, I decided to take Anderson with me. So after a short stop at the money tent, I grabbed Anderson and drove away. Aziz didn’t take it well. Instead of gaining ten million dollars in the scheme, he lost five. He swore that when he caught me he would stake me over a fire ant hill and cover me with honey. Next he promised he was going to cut my unmentionables off and stuff them in my mouth. He doesn’t like me.
                    </p>
                    <p>
                    Anderson and I became close. As he climbed up the the political ladder, he would hire me to take care of trouble spots that required my kind of talent. In between jobs, I spent traveling and writing travel books. Overall I enjoy my life. I have all the money I need thanks to Aziz and every now and then some excitement comes along. 
                    </p>
                    <p>
                    I only have one regret- Allison.
                    </p>
                  </Modal.Body>
                </Modal>

                </>                    


                </Col>
            </Row>

        </Container>
        </div>
    )
}

export default Title;
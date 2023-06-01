import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Carousel from 'react-bootstrap/Carousel';

function Landing() {
    const [show, setShow] = useState(false);

    return (
        <Container>

            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className='Toast'>
                <Toast.Header>
                    <img
                        src="https://img.icons8.com/?size=2x&id=bT3h5O7LsBxQ&format=png"
                        className="icon"
                        alt=""
                    />
                    <strong className="me-auto">9000 BCE.</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>This section will be opened real soon!!</Toast.Body>
            </Toast>


            <div className='Web SliderScrollLeft'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>
            <div className='Web SliderScrollRight'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>
            <div className='Web SliderScrollBottom'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>


            <Row className='MainNavbar'>
                <Col xs={2} className='NavButtons' onClick={() => setShow(true)}>
                    <span>&#8592; Know it yourself </span>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=48365&format=png" />
                </Col>
                <Col xs={8} className='MainLogo'>9000 BCE.
                    <Image className='mainicon' src="https://img.icons8.com/?size=2x&id=bT3h5O7LsBxQ&format=png" />
                </Col>
                <Col xs={2} className='NavButtons' onClick={() => setShow(true)}>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                    <span>Grow it yourself &#8594;</span>
                </Col>
            </Row>


            <Row>
                <div className='Banner'>
                </div>
            </Row>


            <Row className="LandingDirection">
                <Col xs={8} lg={4} className="Web" >What we aim?</Col>
                <Col xs={8} lg={4}><Image className='CenterImage' src="https://cdn.dribbble.com/users/4051369/screenshots/12909192/media/a9aa67f4b8a9d72ec7b6ec62a0010016.jpg" /></Col>
                <Col xs={8} lg={4} className="Web" >What we do?</Col>
            </Row>


            <div className='Mobile SliderScrollCard'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>
            <div className='Mobile SliderScrollCard'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>
            <div className='Mobile SliderScrollCard'>
                <div className='SliderScrollText'>
                    <h3>What is Lorem Ipsum?</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="" className='ReadMore'>Read more..</a></p>
                    <Image className='icon' src="https://img.icons8.com/?size=2x&id=19166&format=png" />
                </div>
            </div>

            <Row className='Footer'>
                <hr />
                <p>&#169; 2023; 9000BCE. Hyderabad, All rights reserved</p>
            </Row>

        </Container>
    );
}

export default Landing;
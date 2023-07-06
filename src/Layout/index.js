import "../App.css";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import React, { useState } from "react";
// import Toast from "react-bootstrap/Toast";

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Container fluid>
        {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className='Toast'>
          <Toast.Header>
            <img
              src="https://img.icons8.com/?size=2x&id=bT3h5O7LsBxQ&format=png"
              className="icon"
              alt=""
            />
            <strong className="me-auto">9000 BCE.</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>This section will be opened real soon!!</Toast.Body>
        </Toast> */}

        <Row className="MainNavbar">
          <Col xs={2} className="NavButtons">
            <Link to="/blog">
              <span>&#8592; Know it yourself </span>
              <Image
                className="icon"
                src="https://img.icons8.com/?size=2x&id=48365&format=png"
              />
            </Link>
          </Col>

          <Col xs={8} className="MainLogo">
            <Link to="/">
              9000 BC.
              <Image
                className="mainicon"
                src="https://img.icons8.com/?size=2x&id=bT3h5O7LsBxQ&format=png"
              />
            </Link>
          </Col>

          <Col xs={2} className="NavButtons">
            <Link to="/store">
              <Image
                className="icon"
                src="https://img.icons8.com/?size=2x&id=19166&format=png"
              />
              <span>Grow it yourself &#8594;</span>
            </Link>
          </Col>
        </Row>

        <Outlet />
        {/* <br /> */}
        <Row className="Footer">
          <hr />
          <p>&#169; 2023; 9000BC. Hyderabad, All rights reserved</p>
        </Row>
      </Container>
    </div>
  );
}

export default App;

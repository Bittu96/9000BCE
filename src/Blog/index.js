import { Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Blog() {
    return (
        <>
            <Row>
                <h1>THis is Blog</h1>
            </Row>
            <Row>
                <div className='Banner'>
                </div>
            </Row>
            <Row>
                <Col>
                    <div className='Blog'>
                    </div>
                </Col>
                <Col>
                    <div className='Blog'>
                    </div>
                </Col>
                <Col>
                    <div className='Blog'>
                    </div>
                </Col>
                <Col>
                    <div className='Blog'>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Blog;
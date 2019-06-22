import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class ShowImage extends Component {
    render() {
        const { img } = this.props.location
        if (img) {
            localStorage.setItem('img', JSON.stringify(img))
        }
        return (
                <>
                    <Container fluid className="h-100 d-flex justify-content-center">
                        <Row className="h-75 w-100 justify-content-center mt-5">
                            <Col md="5" className="p-0 w-100 h-100">
                                <div 
                                    className="w-100 h-100" 
                                    style={{ 
                                        backgroundImage: `url(${JSON.parse(localStorage.getItem('img'))})`,
                                        objectFit: 'cover', backgroundSize: 'cover'
                                    }}
                                />
                            </Col>
                            <Col md="6" className="w-100 h-100 border">
                                <Container className="h-100 d-flex justify-content-center align-items-center">
                                    <Row className="h-50 w-100 justify-content-center align-items-center">
                                        <Col md="10" className="h-100 bg-light  d-flex justify-content-center align-items-center">
                                            <h5>
                                                User and Image details here
                                            </h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        }
}

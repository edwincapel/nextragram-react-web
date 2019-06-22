import React, {Component} from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import Image from "react-graceful-image";
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class UserImages extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: []
        }
    }
    componentDidMount(){
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.user_id}`)
        .then(result => {
          this.setState({
            images: result.data
          })
        })
        .catch(error => {
          console.log('ERROR: ', error)
        })
    }
    
    render(){
        const { images } = this.state
        const { image_width, image_height } = this.props
        
        if (images.length > 0) {
            return(
                <Col md="9" className="d-flex justify-content-center flex-wrap p-3">
                    {
                        images.map((image,index) =>
                            <Link
                                to={{
                                    pathname: "/image",
                                    img: image
                                }}
                                key={index}
                            >
                                <Image
                                    src={image}
                                    width={image_width}
                                    height={image_height}
                                    className="p-1">
                                </Image>
                            </Link>
                        )
                    }
                </Col>
            )
        }

        return(
            <Col md="9" style={{height:200}} className="p-0">
                <Container fluid className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col md="10" className="h-75 bg-light d-flex justify-content-center align-items-center p-0">
                            <h6>User has no Images</h6>
                        </Col>
                    </Row>
                </Container>
            </Col>
        )
    }
}

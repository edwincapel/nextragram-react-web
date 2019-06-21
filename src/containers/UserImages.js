import React, {Component} from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import Image from "react-graceful-image";
import axios from 'axios'

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
          // If unsuccessful, we notify users what went wrong
          console.log('ERROR: ', error)
        })
    }

    render(){
        const { images } = this.state
        
        if (images.length > 0) {
            return(
                <Col md="9" className="d-flex justify-content-center flex-wrap p-3">
                    {
                        images.map((image,index) =>
                            <Image 
                                key={index} 
                                src={image} 
                                width={200} 
                                height={200} 
                                className="p-1">
                            </Image>
                        )
                    }
                </Col>
            )
        }

        return(
            <Col md="9" style={{height:200}} className="">
                <Container className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col md="10" className="h-75 bg-light d-flex justify-content-center align-items-center">
                            <h6>User has no Images</h6>
                        </Col>
                    </Row>
                </Container>
            </Col>
        )
    }
}

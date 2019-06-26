import React, { Component } from 'react'
import axios from 'axios';
import {
    Row,
    Col
} from 'reactstrap';
import Image from 'react-graceful-image';

export default class UserProfileHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: []
        }
    }
    
    componentDidMount(){
        axios.get( `https://insta.nextacademy.com/api/v1/users/${this.props.user_id}`)
        .then(result => {
            this.setState({
                user: result.data
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    render() {
        const { user } = this.state

        if (user.profileImage) {
            return (
                <>
                    <Row className="bg-light d-flex justify-content-center" style={{ height: "275px" }}>
                        <Col md="3" className="d-flex justify-content-center align-items-center">
                            <Image
                                src={user.profileImage}
                                width={200}
                                height={200}
                                className="p-1 rounded-circle"
                            />
                        </Col>
                        <Col md="3" className="d-flex justify-content-center align-items-center">
                            <div>
                                <h4 className="text-center">{user.username}</h4>
                                <small>This is where the profile description goes</small>
                            </div>
                        </Col>
                    </Row>
                </>
            )  
        }

        return(
            null
        )
        

    }
}

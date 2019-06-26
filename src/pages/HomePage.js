import React, { Component } from 'react'
import {
    Container,
    Row
} from 'reactstrap';
import Users from '../components/Users'
import Loader from '../components/Loader'


export default class HomePage extends Component {
    render() {
        const { users } = this.props

        if (users.length === 0) {
            return(
                <Container fluid className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Loader width={400} height={400}/>
                    </Row>
                </Container>
            )
        }
        return (
            users.map((user,index) => 
                <Container fluid key={index}>
                    <Users user = { user } />
                </Container>
            )
        )
    }
}

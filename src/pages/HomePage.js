import React, { Component } from 'react'
import {
    Container
} from 'reactstrap';
import Users from '../components/Users'


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        const { users } = this.props

        return (
            users.map((user,index) => 
                <Container fluid>
                    <Users user = { user } />
                </Container>
            )
        )
    }
}

import React, { Component } from 'react'
import {
    Container,
    Row
} from 'reactstrap';
import UserProfileHeader from '../containers/UserProfileHeader'
import UserImages from '../containers/UserImages'

export default class ProfilePage extends Component {
  render() {
    
    return (
        <>
            <Container fluid>
                <UserProfileHeader user_id={this.props.match.params.id} />
                <Row className="d-flex justify-content-center">
                    <UserImages 
                        user_id={this.props.match.params.id} 
                        image_width={300}
                        image_height={300}    
                    />
                </Row>
            </Container>
        </>
    )
  }
}

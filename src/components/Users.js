import React from 'react'
import UserImages from '../containers/UserImages'
import { 
    Row,
    Col
} from 'reactstrap'

function Users({user}){
    return(
        <Row className="p-2 justify-content-center align-items-center border-bottom">
            <Col md="3" className="d-flex flex-column justify-content-center align-items-center">
                <img src={user.profileImage} className="rounded-circle" width={125} height={125}></img>
                <a className="mt-1">{user.username}</a>
            </Col>
            <UserImages user_id={user.id}/>
        </Row>
    )
}

export default Users
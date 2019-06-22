import React from 'react'
import UserImages from '../containers/UserImages'
import Image from "react-graceful-image";
import { 
    Row,
    Col
} from 'reactstrap'

const Users = ({user}) => {
    return(
        <Row className="p-2 justify-content-center align-items-center">
            <Col md="3" className="d-flex flex-column justify-content-center align-items-center">
                <Image 
                    src={user.profileImage} 
                    className="rounded-circle" 
                    width={125} 
                    height={125}>   
                </Image>
                
                <a className="mt-1">{user.username}</a>
            </Col>
            <UserImages user_id={user.id}/>
        </Row>
    )
}

export default Users
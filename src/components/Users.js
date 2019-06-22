import React from 'react'
import UserImages from '../containers/UserImages'
import Image from "react-graceful-image";
import { 
    Row,
    Col
} from 'reactstrap'
import { Link } from 'react-router-dom';


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
                <Link 
                    to={`/users/${user.id}`} 
                    className="mt-1 text-decoration-none text-dark"
                >
                    {user.username}
                </Link>
            </Col>
            <UserImages 
                user_id={user.id}
                image_width={225}
                image_height={225}  
            />
        </Row>
    )
}

export default Users
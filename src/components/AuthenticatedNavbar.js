import React from 'react'
import {
    NavItem,
    NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom';


const AuthenticatedNavbar = (props) => {
    return(
        <>
            <NavItem>
                <Link className="nav-link text-dark text-decoration-none" to={`/users/${JSON.parse(localStorage.current_user).id}`}>
                    Profile
                </Link>
            </NavItem>
            <NavItem>
                <NavLink href='#' className="text-dark text-decoration-none" onClick={props.handleLogout}>
                    Logout
                </NavLink>
            </NavItem>
        </>
    )
}

export default AuthenticatedNavbar
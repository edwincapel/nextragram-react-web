import React from 'react'
import {
    NavItem,
    NavLink
} from 'reactstrap'

const RequireAuthentication = (props) => {
    return (
        <>
            <NavItem>
                <NavLink href="#" onClick={props.toggleLoginModal}>Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" onClick={props.toggleSignUpModal}>Sign Up</NavLink>
            </NavItem>
        </>
    )
}

export default RequireAuthentication
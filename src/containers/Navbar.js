import React, { Component } from 'react';
import {
    Collapse,
    Navbar as NavbarBootstrap,
    NavbarToggler,
    Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import AuthenticatedNavbar from '../components/AuthenticatedNavbar'
import RequireAuthentication from '../components/RequireAuthentication'

 class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            loginModal: false,
            signUpModal: false,
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleLoginModal = () => {
        this.setState({
            signUpModal: false,
            loginModal: !this.state.loginModal
        })
    }

    toggleSignUpModal = () => {
        this.setState({
            loginModal: false,
            signUpModal: !this.state.signUpModal
        })
    }

    handleLogout = () => {
        localStorage.removeItem('JWT');
        localStorage.removeItem('current_user');
        this.props.history.push('/')
    }

    render() {
        const { loginModal, signUpModal } = this.state

        return (
            <>
                <NavbarBootstrap color="light" light expand="md">
                    <Link to="/" className="navbar-brand text-decoration-none">
                        Nextagram
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                !localStorage.getItem('JWT') && 
                                <RequireAuthentication 
                                    toggleLoginModal={this.toggleLoginModal} 
                                    toggleSignUpModal={this.toggleSignUpModal}
                                />  
                            }
                            {
                                localStorage.getItem('JWT') && 
                                <AuthenticatedNavbar 
                                    handleLogout={this.handleLogout}
                                />
                            }
                        </Nav>
                    </Collapse>
                </NavbarBootstrap>
                <LoginModal loginModal={loginModal} toggleLoginModal={this.toggleLoginModal} toggleSignUpModal={this.toggleSignUpModal} toggleNavbar={this.toggle}/>
                <SignUpModal signUpModal={signUpModal} toggleSignUpModal={this.toggleSignUpModal} toggleLoginModal={this.toggleLoginModal} toggleNavbar={this.toggle}/>
            </>
        );
    }
}

export default withRouter(Navbar)
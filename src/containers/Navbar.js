import React, { Component } from 'react';
import {
    Collapse,
    Navbar as NavbarBootstrap,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default class Navbar extends Component {
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
                            <NavItem>
                                <NavLink href="#" onClick={this.toggleLoginModal}>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={this.toggleSignUpModal}>Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link 
                                            to="/users/9"
                                            className="text-decoration-none text-dark"
                                        >
                                            Test Profile
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </NavbarBootstrap>
                <LoginModal loginModal={loginModal} toggleLoginModal={this.toggleLoginModal} toggleSignUpModal={this.toggleSignUpModal}/>
                <SignUpModal signUpModal={signUpModal} toggleSignUpModal={this.toggleSignUpModal} toggleLoginModal={this.toggleLoginModal}/>
            </>
        );
    }
}

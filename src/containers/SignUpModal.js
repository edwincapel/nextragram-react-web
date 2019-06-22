import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

 class SignUpModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, password, username } = this.state

        axios({
            method: 'post',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            header: { 'content-type': 'application/json' },
            data: {
                username,
                email,
                password
            }
        })
        .then(response => {
            let user = JSON.stringify(response.data.user)

            localStorage.setItem('JWT', response.data.auth_token);
            localStorage.setItem('current_user', user);

            this.props.toggleSignUpModal()
            this.props.toggleNavbar()
            this.props.history.push(`/users/${JSON.parse(localStorage.current_user).id}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {
        const { signUpModal } = this.props
        const { username, email, password } = this.state

        return (
            <>
                <Modal isOpen={signUpModal} toggle={this.props.toggleSignUpModal} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleSignUpModal}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input 
                                    type="text" 
                                    name="username" 
                                    id="signUpUsername" 
                                    placeholder="Username" 
                                    onChange={this.handleUsername}
                                    value={username}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="signUpEmail" 
                                    placeholder="example@example.com" 
                                    onChange={this.handleEmail}
                                    value={email}
                                /> 
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="signUpPassword" 
                                    placeholder="Password" 
                                    onChange={this.handlePassword}
                                    value={password}
                                />
                            </FormGroup>
                            <Button color="primary" type="submit">Sign Up</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <small>
                            Login
                            <span className="border-bottom" onClick={this.props.toggleLoginModal}>
                                &nbsp;here
                            </span>
                        </small>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default withRouter(SignUpModal)
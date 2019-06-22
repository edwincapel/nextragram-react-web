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
import { withRouter} from 'react-router-dom';


class LoginModal extends Component {
    constructor(props){
        super(props)
        this.state = {
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
    
    handleSubmit = event => {
        event.preventDefault()
        const { email, password } = this.state

        axios({
            method: 'post',
            url: 'https://insta.nextacademy.com/api/v1/login',
            header: { 'content-type': 'application/json' },
            data: {
                email,
                password
            }
        })
        .then( response => {
            let user = JSON.stringify(response.data.user)

            localStorage.setItem('JWT', response.data.auth_token);
            localStorage.setItem('current_user', user);
            
            this.props.toggleLoginModal()
            this.props.toggleNavbar()
            this.props.history.push(`/users/${JSON.parse(localStorage.current_user).id}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { loginModal } = this.props
        const { email, password } = this.state

        return (
            <> 
                <Modal isOpen={loginModal} toggle={this.props.toggleLoginModal} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="loginEmail" 
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
                                    id="loginPassword" 
                                    placeholder="Password" 
                                    onChange={this.handlePassword}
                                    value={password}
                                />
                            </FormGroup>
                            <Button color="primary" type="submit">Login</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <small>
                            Create an account 
                            <span className="border-bottom" onClick={this.props.toggleSignUpModal}>
                            &nbsp;here
                            </span>
                        </small>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default withRouter(LoginModal)
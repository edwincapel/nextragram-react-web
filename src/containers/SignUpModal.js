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

export default class SignUpModal extends Component {
    constructor(props) {
        super(props)
        this.props = {

        }
    }

    render() {
        const { signUpModal } = this.props

        return (
            <>
                <Modal isOpen={signUpModal} toggle={this.props.toggleSignUpModal} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleSignUpModal}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" name="username" id="signUpUsername" placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="signUpEmail" placeholder="example@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="signUpPassword" placeholder="Password" />
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

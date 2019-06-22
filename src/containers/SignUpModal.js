import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggleSignUpModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggleSignUpModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

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


export default class LoginModal extends Component {
    constructor(props){
        super(props)
        this.props = {

        }
    }

    render() {
        const { loginModal } = this.props

        return (
            <> 
                <Modal isOpen={loginModal} toggle={this.props.toggleLoginModal} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="loginEmail" placeholder="example@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="loginPassword" placeholder="Password" />
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

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LogIn.css";
import {Redirect, withRouter} from 'react-router-dom';

class Login extends React.Component  {

    constructor(props) {

        super(props);

        this.verifyUser = this.verifyUser.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            email: "Email",
            password: false,
            nuAiContState: false,
            errorStatus: 0,
            error: null
        };
    }

    validateForm() {
        this.verifyUser();
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    onClick(){
        this.setState({nuAiContState: true})
    }

    verifyUser() {
        if(this.state.email === 'user@yahoo.com' && this.state.password === 'user') {
            this.props.history.push({
                pathname: '/home'
            })
        }
        else {
            console.log("FAILED");
        }
    }

    render() {
        return (
            <div className="Login">
                <Form>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                    </Form.Group>

                    <Button id="buttonLogin" size="lg" onClick={this.verifyUser}>
                        LogIn
                    </Button>

                    <Button id="buttonNuAiCont" size="lg" onClick={this.onClick}>
                        Nu ai cont?
                    </Button>
                
                    <img src="/images/userLogIn.png" alt="Image" class="image"></img>
                </Form>
            </div>
        );
    }
}

export default withRouter(Login)
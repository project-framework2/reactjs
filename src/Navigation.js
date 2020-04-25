import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'


export class Navigation extends Component {
    render() {
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="baisc-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/carrousel">Carousel</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/formulaire">Formulaire</NavLink>
                    </Nav>
                </Navbar.Collapse>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="d-inline p-2 bg-dark text-white border-0">
                        Autres Frameworks
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
			<Dropdown.Item href="http://54.38.191.163/bootstrap">Bootstrap</Dropdown.Item>
                        <Dropdown.Item href="http://54.38.191.163:3000">Meteor</Dropdown.Item>
                        <Dropdown.Item href="http://54.38.191.163:8017">VueJS</Dropdown.Item>
			<Dropdown.Item href="https://angularjssite.stackblitz.io/">AngularJS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="d-inline p-2 bg-dark text-white border-0">
                        Login
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="ex@ex.com" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Se souvenir" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign in
                            </Button>
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="d-inline p-2 bg-dark text-white">Logout</div>
            </Navbar>
        )
    }
}
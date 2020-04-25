import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export class Formulaire extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            spe: "Informatique",
            year: "1",
            com: "",
            list: [],
        }
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeSpe = (event) => {
        this.setState({
            spe: event.target.value
        })
    }
    changeYear = (event) => {
        this.setState({
            year: event.target.value
        })
    }
    changeCom = (event) => {
        this.setState({
            com: event.target.value
        })
    }

    showInfo () {
        this.setState({
            list: [this.state.name,this.state.spe,this.state.year,this.state.com],
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Nom Prénom</Form.Label>
                        <Form.Control type="textarea" placeholder="Jean Charles" onChange={this.changeName} value={this.state.name}/>
                    </Form.Group>
                    <Form.Group controlId="spe">
                        <Form.Label>Spécialité</Form.Label>
                        <Form.Control as="select" onChange={this.changeSpe} value={this.state.spe}>
                        <option value="Informatique">Informatique</option>
                        <option value="Electronique">Electronique</option>
                        <option value="Sience">Sience</option>
                        <option value="Mécanique">Mécanique</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="year">
                        <Form.Label>Année</Form.Label>
                        <Form.Control as="select" multiple onChange={this.changeYear} value={this.state.year}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="com">
                        <Form.Label>Commentaire</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.changeCom} value={this.state.com}/>
                    </Form.Group>
                </Form>
                <Button variant="dark" onClick={() => this.showInfo()}>Submit</Button>{' '}
                <p> </p>
                <div>
                    <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
}
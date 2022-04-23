import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import GotService from "../../services/gotService";


export default class RandomChar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showRandomChar: false,
            character: {}
        };
    }

    handleRandomCharButton = (event) => {
        const showRandomChar = !this.state.showRandomChar;
        let character = {};
        const service = new GotService()

        const promise = !showRandomChar ?
            Promise.resolve()
            : service.getCharacter(Math.floor(Math.random() * 100)).then(data => {
                character = data;
                console.log(character);
            })
        Promise.all([promise]).then(() => {
            this.setState({showRandomChar: showRandomChar, character: character});
        })
    }

    render() {
        console.log(this.state.character)
        const {character} = this.state;
        return <>
            {this.state.showRandomChar ?
                <div className="rounded" style={{padding: "25px 25px 15px 25px", marginBottom: 10, backgroundColor: '#fff'}}>
                    <h4 style={{marginBottom: 20, textAlign: "center"}}>Random Character: {character.name}</h4>
                    <ListGroup>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Gender</span>
                            <span>{character.gender}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Born</span>
                            <span>{character.born}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Died</span>
                            <span>{character.died}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Culture</span>
                            <span>{character.cultur}</span>
                        </ListGroupItem>
                    </ListGroup>
                </div> : null}
            <Button color='primary' style={{width: 250, height: 40, marginBottom: 10}} onClick={this.handleRandomCharButton}>Show random character</Button>
        </>;
    }
}

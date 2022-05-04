import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import GotService from "../../services/gotService";


export default class CharDetails extends Component {
     gotService = new GotService()

    state = {
         char: null,
    }

    componentDidMount() {
         this.updateChar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.charId !== prevProps.charId) {
             this.updateChar()
         }
    }

    updateChar = () => {
         const {charId} = this.props;
         if (!charId) {
             return;
         }

         this.gotService.getCharacter(charId).then(char => {
             const {name, gender, born, died, culture} = char;
             this.setState({
                 char: {name, gender, born, died, culture}
             });
         })
    }

    render() {
        const {char} = this.state;

        return (
            <div className="rounded" style={{padding: "25px 25px 15px 25px", marginBottom: 40, backgroundColor: '#fff'}}>
                {char ? <>
                    <h4 style={{marginBottom: 20, textAlign: "center"}}>{char.name || 'Unknown'}</h4>
                    <ListGroup>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Gender</span>
                            <span>{char.gender || 'Unknown'}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Born</span>
                            <span>{char.born || 'Unknown'}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Died</span>
                            <span>{char.died || 'Unknown'}</span>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between">
                            <span className="term">Culture</span>
                            <span>{char.culture || 'Unknown'}</span>
                        </ListGroupItem>
                    </ListGroup>
                </> : <span>Please select a character</span>}
            </div>
        );
    }
}
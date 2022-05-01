import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import GotService from "../../services/gotService";


export default class RandomChar extends Component {
    constructor(props) {
        super(props);

        this.gotService = new GotService();
        this.state = {
            character: {},
            loading: true,
            error: false,
        };

        this.updateChar();
    }

    onError = (err) => {
        this.setState({error: true, loading: false});
    }

    updateChar = () => {
        this.gotService.getCharacter(Math.floor(Math.random() * 100))
            .then((data) => {
                const {name, gender, born, died, culture} = data;
                this.setState({
                    character: {name, gender, born, died, culture},
                    loading: false
                });
            })
            .catch(this.onError);
    }

    render() {
        const { character: {name, gender, born, died, culture}, loading, error } = this.state;

        return <div className="rounded d-flex justify-content-center align-items-center" style={{width: 450, height: 280, marginBottom: 10, backgroundColor: '#fff'}}>
            {error ? <div>
                    <img src={process.env.PUBLIC_URL + 'img/error.png'} style={{width: '100%', borderRadius: 5}} alt="error"/>
                </div>
                : loading ?
                    <Spinner animation="border" variant="primary" style={{width: 100, height: 100}} />
                    : <div style={{margin: '25px 25px 15px 25px'}}>
                        <h4 style={{marginBottom: 20, textAlign: 'center'}}>Random Character: {name || 'Unknown'}</h4>
                        <ListGroup>
                            <ListGroupItem className="d-flex justify-content-between">
                                <span className="term">Gender</span>
                                <span>{gender || 'Unknown'}</span>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex justify-content-between">
                                <span className="term">Born</span>
                                <span>{born || 'Unknown'}</span>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex justify-content-between">
                                <span className="term">Died</span>
                                <span>{died || 'Unknown'}</span>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex justify-content-between">
                                <span className="term">Culture</span>
                                <span>{culture || 'Unknown'}</span>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
            }
        </div>
    }
}

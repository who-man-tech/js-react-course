import React, {Component} from 'react';
import {ListGroup, Spinner} from "react-bootstrap";
import GotService from "../../services/gotService";


export default class ItemList extends Component {
     gotService = new GotService()

    state = {
         charList: null,
    }

    componentDidMount() {
         this.gotService.getAllCharacters().then(charList => {this.setState({charList})})
    }

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner animation="border" variant="primary" style={{width: 100, height: 100}} />
        }

        return (
            <ListGroup>
                {charList.map((item, i) => item.name ? <ListGroup.Item key={i} onClick={() => this.props.onCharSelected(item.name)}>{item.name}</ListGroup.Item> : null)}
            </ListGroup>
        );
    }
}
import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";


export default class ItemList extends Component {
    render() {
        return (
            <ListGroup className="item-list list-group">
                <ListGroupItem className="list-group-item">
                    John Snow
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}
import React, {Component} from 'react';
import {ListGroup, Spinner} from "react-bootstrap";


export default class ItemList extends Component {
    render() {
        const {itemList} = this.props;

        if (!itemList) {
            return <Spinner animation="border" variant="primary" style={{width: 100, height: 100}} />
        }

        return (
            <ListGroup>
                {itemList.map((item, i) => {
                    return <ListGroup.Item key={i} onClick={() => this.props.onItemSelected(item)}>
                        {this.props.renderItem(item)}
                    </ListGroup.Item>
                })}
            </ListGroup>
        );
    }
}
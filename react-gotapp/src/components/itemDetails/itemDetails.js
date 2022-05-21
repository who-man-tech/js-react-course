import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";


const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field] || 'Unknown'}</span>
        </ListGroupItem>
    );
}

export {
    Field
}


export default class ItemDetails extends Component {
    render() {
        const {item} = this.props;

        return (
            <div className="rounded" style={{padding: "25px 25px 15px 25px", marginBottom: 40, backgroundColor: '#fff'}}>
                {item ? <>
                    <h4 style={{marginBottom: 20, textAlign: "center"}}>{item.name || 'Unknown'}</h4>
                    <ListGroup>
                        {React.Children.map(this.props.children, (child) => React.cloneElement(child, {item}))}
                    </ListGroup>
                </> : <span>Please select an item</span>}
            </div>
        );
    }
}
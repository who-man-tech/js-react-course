import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";


export default class CharDetails extends Component {
    render() {
        return (
            <div className="rounded" style={{padding: "25px 25px 15px 25px", marginBottom: 40, backgroundColor: '#fff'}}>
                <h4 style={{marginBottom: 20, textAlign: "center"}}>John Snow</h4>
                <ListGroup>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
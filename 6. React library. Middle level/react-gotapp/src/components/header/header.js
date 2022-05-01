import React from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";


const Header = () => (
    <Navbar bg="light" variant="light" className="rounded mb-3">
        <Container>
            <Navbar.Brand href="#">Game of Thrones DB</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Characters</Nav.Link>
                <Nav.Link href="#">Houses</Nav.Link>
                <Nav.Link href="#">Books</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

export default Header
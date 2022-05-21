import React from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => (
    <Navbar bg="light" variant="light" className="rounded mb-3">
        <Container>
            <Link to="/">Game of Thrones DB</Link>
            <Nav className="me-auto">
                <Link to="/characters">Characters</Link>
                <Link to="/houses">Houses</Link>
                <Link to="/books">Books</Link>
            </Nav>
        </Container>
    </Navbar>
);

export default Header
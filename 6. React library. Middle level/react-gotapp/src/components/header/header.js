import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";


const Header = () => (
    <div style={{marginBottom: 10}}>
        <Navbar className="rounded" color="light" light expand="md">
            <NavbarBrand href="/">Game of Thrones DB</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
                <Nav className="me-auto" navbar >
                    <NavItem>
                        <NavLink href="#">Characters</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Houses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Books</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    </div>
);

export default Header
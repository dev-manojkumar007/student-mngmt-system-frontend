import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';

const Menu = () => {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link
                        className="list-group-item list-group-item-action"
                        tag="a"
                        to="/"
                        action
                    >
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        className="list-group-item list-group-item-action"
                        tag="a"
                        to="students"
                        actionS
                    >
                        Students Section
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        className="list-group-item list-group-item-action"
                        tag="a"
                        to="teachers"
                        action
                    >
                        Teachers Section
                    </Link>
                </NavItem>
            </Nav>

        </Navbar>
    );
}

export default Menu;
import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Jumbotron className="bg-dark text-light text-center">
                <br/>
                <h3 className="display-5">Student Management System</h3>
                <br/>
            </Jumbotron>
        </div>
    );
}

export default Header;
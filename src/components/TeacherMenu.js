import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const TeacherMenu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="/teachers"
                actionS
            >
                Add Teacher
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="view-teachers"
                actionS
            >
                View All Teachers
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="teacher-by-id"
                actionS
            >
                Find with ID
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="teachers-by-name"
                actionS
            >
                Find with Name
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="update-teacher"
                actionS
            >
                Update Teacher
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="delete-teacher"
                actionS
            >
                Delete Teacher
            </Link>
        </ListGroup>
    );
}

export default TeacherMenu;
import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const StudentMenu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="/students"
                actionS
            >
                Add Student
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="view-students"
                actionS
            >
                View All Students
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="student-by-rollno"
                actionS
            >
                Find with RollNo
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="students-by-name"
                actionS
            >
                Find with Name
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="students-by-branch"
                actionS
            >
                Find with Branch
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="update-student"
                actionS
            >
                Update Student
            </Link>
            <Link className="list-group-item list-group-item-action"
                tag="a"
                to="delete-student"
                actionS
            >
                Delete Student
            </Link>
        </ListGroup>
    );
}

export default StudentMenu;
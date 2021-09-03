import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import AddStudent from './AddStudent';
import StudentMenu from './StudentMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindWithRollNo from './FindWithRollNo';
import FindWithStudentName from './FindWithStudentName';
import FindWithBranch from './FindWithBranch';
import UpdateStudent from './UpdateStudent';
import DeleteStudent from './DeleteStudent';
import ViewAllStudent from './ViewAllStudent';

const StudentWindow = () => {

    return (
        <Router>
            <div className="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <Card>
                        <CardHeader className="bg-dark text-light">
                            <h6 className="display-7">Students Information Portal</h6>
                        </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div class="col-4">
                                    <StudentMenu />
                                </div>
                                <div class="col-8">
                                    <Route path="/students" component={AddStudent} exact />
                                    <Route path="/view-students" component={ViewAllStudent} exact />                                    <Route path="/student-by-rollno" component={FindWithRollNo} exact />
                                    <Route path="/students-by-name" component={FindWithStudentName} exact />
                                    <Route path="/students-by-branch" component={FindWithBranch} exact />
                                    <Route path="/update-student" component={UpdateStudent} exact />
                                    <Route path="/delete-student" component={DeleteStudent} exact />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div class="col-1"></div>
            </div>
        </Router>
    );
}

export default StudentWindow;
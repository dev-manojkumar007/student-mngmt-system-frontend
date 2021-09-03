import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeacherMenu from './TeacherMenu';
import AddTeacher from './AddTeacher';
import FindWithId from './FindWithId';
import FindTeachersWithName from './FindTeachersWithName';
import UpdateTeacher from './UpdateTeacher';
import DeleteTeacher from './DeleteTeacher';
import ViewAllTeachers from './ViewAllTeachers';

const TeacherWindow = () => {

    return (
        <Router>
            <div className="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <Card>
                        <CardHeader className="bg-dark text-light">
                            <h6 className="display-7">Teachers Information Portal</h6>
                        </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div class="col-4">
                                    <TeacherMenu />
                                </div>
                                <div class="col-8">
                                <Route path="/teachers" component={AddTeacher} exact />
                                <Route path="/view-teachers" component={ViewAllTeachers} exact />
                                <Route path="/teacher-by-id" component={FindWithId} exact />
                                <Route path="/teachers-by-name" component={FindTeachersWithName} exact />
                                <Route path="/update-teacher" component={UpdateTeacher} exact />
                                <Route path="/delete-teacher" component={DeleteTeacher} exact />
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

export default TeacherWindow;
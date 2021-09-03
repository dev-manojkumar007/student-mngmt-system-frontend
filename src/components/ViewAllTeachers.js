import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

import base_url from '../configuration/springapi';
import axios from 'axios';

const ViewAllTeachers = () => {

    const [teachers, setTeachers] = useState([]);

    // Document title function

    useEffect(() => {
        document.title = "All Teachers"
    }, []);

    // Fetching Data from API ( call from server )
    
    const getInfo = () => {
        axios.get(`${base_url}/teachers`).then(
            (success) => {
               setTeachers(success.data);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    // Calling Data Fetching function

    useEffect(() => {
        getInfo();
    },[]);
    
    // User Interface Code

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>All Teachers</CardHeader>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Experience(in years)</th>
                                </tr>
                            </thead>
                            <tbody>
                            {teachers.map(teacher => {
                                return(
                                    <tr>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.experience}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default ViewAllTeachers;
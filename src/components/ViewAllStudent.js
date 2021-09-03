import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

import base_url from '../configuration/springapi';
import axios from 'axios';

const ViewAllStudent = () => {

    const [students, setStudents] = useState([]);

    // Document title function

    useEffect(() => {
        document.title = "All Students"
    }, []);

    // Fetching Data from API ( call from server )
    
    const getInfo = () => {
        axios.get(`${base_url}/student`).then(
            (success) => {
               setStudents(success.data);
            },
            (error) => {
                alert(error);
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
                        <CardHeader>All Students</CardHeader>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Roll No</th>
                                    <th>Name</th>
                                    <th>Branch</th>
                                    <th>Batch Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {students.map(student => {
                                return(
                                    <tr>
                                        <td>{student.rollNo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.branch}</td>
                                        <td>{student.batchYear}</td>
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

export default ViewAllStudent;
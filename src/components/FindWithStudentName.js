import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const FindWithStudentName = () => {


    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Students | By Name"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        getInfo(student);
        e.preventDefault();
    }

    // Fetching data from API ( call from server )

    const getInfo = (inputData) => {
        axios.get(`${base_url}/studentsByName/${inputData.name}`).then(
            (response) => {
                setStudents(response.data);

                if (Object.keys(response.data).length === 0)
                    alert("No Student Found with given Name. Please input valid-existing student name.")
                else
                    alert(Object.keys(response.data).length + " Record Found !")
            },
            (error) => {
                setStudent({});
                alert("No Student Found with given Name. Please input valid-existing student name.");
            }
        );
    };

    // User Interface Code

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10 text-center">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>Find Students with Name</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="name"
                                        placeholder="Enter Student Name"
                                        onChange={(e) => {
                                            setStudent({ ...student, name: e.target.value });
                                        }}
                                        required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Find Students</Button>
                        </Form>
                    </CardBody>
                </Card>
                <br />
                <Card>
                    <CardHeader>Result</CardHeader>
                    <CardBody id="result">
                        <Table striped>
                            <thead>
                                <th>Roll No</th>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Passout Year</th>
                            </thead>
                            <tbody>
                                {students.map(st => {
                                    return (
                                        <tr>
                                            <td>{st.rollNo}</td>
                                            <td>{st.name}</td>
                                            <td>{st.branch}</td>
                                            <td>{st.batchYear}</td>
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

export default FindWithStudentName;
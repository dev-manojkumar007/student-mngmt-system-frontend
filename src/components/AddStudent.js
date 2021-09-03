import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../configuration/springapi';


const AddStudent = () => {

    const [student, setStudent] = useState({ 'branch': 'CSE' });

    // Form Handler function

    const handleForm = (e) => {

        postDatatoServer(student);
        e.preventDefault();
    }

    // Document title function

    useEffect(() => {
        document.title = "Add Student"
    }, []);

    // Saving data on server function

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/addStudent`, data).then(
            () => {
                alert("Student with name " + data.name + " Saved Successfully.");
                clearData();
            },
            () => {
                alert("Invalid Roll No : enter unique integer roll number.");
            }
        );
    };

    // Clear data on saving

    const clearData = () => {
        document.getElementById("rollNo").value = '';
        document.getElementById("branch").value = 'CSE';
        document.getElementById("name").value = '';
        document.getElementById("batchYear").value = '';
    }

    // User Interface Code

    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>Add Student</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Roll No</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="rollNo"
                                        id="rollNo"
                                        placeholder="Enter Roll No"
                                        onChange={(e) => {
                                            setStudent({ ...student, rollNo: e.target.value });
                                        }}
                                        required />
                                </Col>
                                <br /><br />
                                <Label sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Name"
                                        onChange={(e) => {
                                            setStudent({ ...student, name: e.target.value });
                                        }}
                                        required />
                                </Col>
                                <br /><br />
                                <Label sm={4}>Branch</Label>
                                <Col sm={8}>
                                    <Input type="select"
                                        name="branch"
                                        id="branch"
                                        onChange={(e) => {
                                            setStudent({ ...student, branch: e.target.value });
                                        }}
                                        required>
                                        <option value="CSE">CSE</option>
                                        <option value="IT">IT</option>
                                        <option value="ECE">ECE</option>
                                        <option value="ME">ME</option>
                                        <option value="EE">EE</option>
                                    </Input>
                                </Col>
                                <br /><br />
                                <Label sm={4}>Passout Year</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="batchYear"
                                        id="batchYear"
                                        placeholder="Enter Passout Year"
                                        onChange={(e) => {
                                            setStudent({ ...student, batchYear: e.target.value });
                                        }}
                                        maxLength="4"
                                        required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Save Student</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div className="col-1"></div>
        </div>
    );
}

export default AddStudent;
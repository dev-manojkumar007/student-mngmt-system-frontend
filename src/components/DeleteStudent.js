import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const DeleteStudent = () => {

    const [student,setStudent] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Delete Student"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        deleteInfo(student);
        e.preventDefault();
    }

    // Deleting data from Database through API ( call to server )

    const deleteInfo = (inputData) => {
        axios.delete(`${base_url}/deleteStudent/${inputData.rollNo}`).then(
            (response) => {
                alert(response.data);
            },
            (error) => {
                setStudent({});
                alert("No Student found with given Roll No.");
            }
        );
    };

    // User Interface Code

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>Delete Student</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Roll No</Label>
                                <Col sm={8}>
                                <Input type="text"
                                        name="rollNo"
                                        placeholder="Enter Roll No"
                                        onChange={(e) => {
                                            setStudent({ ...student, rollNo: e.target.value });
                                        }}
                                        required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Delete Student</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default DeleteStudent;
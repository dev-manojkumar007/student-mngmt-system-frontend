import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const FindWithRollNo = () => {

    const [student, setStudent] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Student | By Roll"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        getInfo(student);
        e.preventDefault();
    }

    // Fetching data from API ( call from server )

    const getInfo = (inputData) => {
        axios.get(`${base_url}/student/${inputData.rollNo}`).then(
            (response) => {
                setStudent(response.data);

                if (Object.keys(response.data).length === 0)
                    alert("No Student Found with given Roll No. Please input valid-existing roll number.")
                else
                    alert("One Record Found !")
            },
            (error) => {
                setStudent({});
                alert("No Student Found with given Roll No. Please input valid-existing roll number.");
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
                        <CardHeader>Find Student with RollNo</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row >
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
                            <Button type="submit" color="success">Find Student</Button>
                        </Form>
                    </CardBody>
                </Card>
                <br />
                <Card>
                    <CardHeader>Result</CardHeader>
                    <CardBody id="result">
                        <Table striped>
                            <thead>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Passout Year</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.batchYear}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default FindWithRollNo;
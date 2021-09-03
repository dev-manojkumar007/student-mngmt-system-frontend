import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const FindTeachersWithName = () => {

    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Teachers | By Name"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        getInfo(teacher);
        e.preventDefault();
    }

    // Fetching data from API ( call from server )

    const getInfo = (inputData) => {
        axios.get(`${base_url}/teachersByName/${inputData.name}`).then(
            (response) => {
                setTeachers(response.data);

                if (Object.keys(response.data).length === 0)
                    alert("No Teacher Found with given Name. Please input valid-existing teacher name.")
                else
                    alert(Object.keys(response.data).length + " Record Found !")
            },
            (error) => {
                setTeacher({});
                alert("No Teacher Found with given Name. Please input valid-existing teacher name.");
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
                        <CardHeader>Find Teachers By Name</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text" 
                                    name="name" 
                                    placeholder="**full name**" 
                                    onChange={(e) => {
                                        setTeacher({ ...teacher, name: e.target.value });
                                    }}
                                    required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Find Teachers</Button>
                        </Form>
                    </CardBody>
                </Card>
                <br />
                <Card>
                    <CardHeader>Result</CardHeader>
                    <CardBody id="result">
                        <Table striped>
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Experience ( in years )</th>
                            </thead>
                            <tbody>
                                {teachers.map(tch => {
                                    return (
                                        <tr>
                                            <td>{tch.id}</td>
                                            <td>{tch.name}</td>
                                            <td>{tch.experience}</td>
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

export default FindTeachersWithName;
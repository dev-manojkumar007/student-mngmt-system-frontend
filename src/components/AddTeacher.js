import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../configuration/springapi';

const AddTeacher = () => {

    const [teacher, setTeacher] = useState();

    // Form Handler function

    const handleForm = (e) => {

        postDatatoServer(teacher);
        e.preventDefault();
    }

    // Document title function

    useEffect(() => {
        document.title = "Add Teacher"
    }, []);

    // Saving data on server function

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/addTeacher`, data).then(
            () => {
                alert("Teacher with name " + data.name + " Saved Successfully.");
                clearData();
            },
            () => {
                alert("Invalid Form Input : enter unique integer id / enter valid experince.");
            }
        );
    };

    // Clear data on saving

    const clearData = () => {
        document.getElementById("id").value = '';
        document.getElementById("name").value = '';
        document.getElementById("experience").value = '';
    }

    // User Interface Code

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>Add Teacher</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Teacher ID</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="id"
                                        id="id"
                                        placeholder="**4 digits ID**"
                                        onChange={(e) => {
                                            setTeacher({ ...teacher, id: e.target.value });
                                        }}
                                        maxLength="4"
                                        required />
                                </Col>
                                <br /><br />
                                <Label sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder="**full name**"
                                        onChange={(e) => {
                                            setTeacher({ ...teacher, name: e.target.value });
                                        }}
                                        required />
                                </Col>
                                <br /><br />
                                <Label sm={4}>Experience</Label>
                                <Col sm={8}>
                                    <Input type="text"
                                        name="experience"
                                        id="experience"
                                        placeholder="**in years**"
                                        onChange={(e) => {
                                            setTeacher({ ...teacher, experience: e.target.value });
                                        }}
                                        maxLength="2"
                                        required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Save Teacher</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default AddTeacher;
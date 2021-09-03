import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const DeleteTeacher = () => {

    const [teacher,setTeacher] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Delete Teacher"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        deleteInfo(teacher);
        e.preventDefault();
    }

    // Deleting data from Database through API ( call to server )

    const deleteInfo = (inputData) => {
        axios.delete(`${base_url}/deleteTeacher/${inputData.id}`).then(
            (response) => {
                console.log(response.data);
                alert(response.data);
            },
            (error) => {
                setTeacher({});
                alert("No Teacher found with given Teacher ID");
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
                        <CardHeader>Delete Teacher</CardHeader>
                        <br />
                        <Form className="text-center" onSubmit={handleForm}>
                            <FormGroup row>
                                <Label sm={4}>Teacher ID</Label>
                                <Col sm={8}>
                                <Input type="text" 
                                    name="id" 
                                    placeholder="**4 digits ID**" 
                                    onChange={(e) => {
                                        setTeacher({ ...teacher, id: e.target.value });
                                    }}
                                    maxLength="4"
                                    required />
                                </Col>
                            </FormGroup>
                            <br />
                            <Button type="submit" color="success">Delete Teacher</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default DeleteTeacher;
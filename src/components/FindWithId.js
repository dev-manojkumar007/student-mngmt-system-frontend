import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import base_url from '../configuration/springapi';
import axios from 'axios';

const FindWithId = () => {

    const [teacher, setTeacher] = useState({});

    // Document title function

    useEffect(() => {
        document.title = "Teacher | By ID"
    }, []);

    // Form Handler

    const handleForm = (e) => {
        getInfo(teacher);
        e.preventDefault();
    }

    // Fetching data from API ( call from server )

    const getInfo = (inputData) => {
        axios.get(`${base_url}/teacher/${inputData.id}`).then(
            (response) => {
                setTeacher(response.data);
                
                if(Object.keys(response.data).length === 0)
                    alert("No Teacher Found with given ID. Please input valid-existing teacher ID.")
                else
                   alert("One Record Found !")
            },
            (error) => {
                setTeacher({});
                alert("No Teacher Found with given ID. Please input valid-existing teacher ID.");
            }
        );
    };

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Card>
                    <CardBody className="text-center">
                        <CardHeader>Find Teacher By ID</CardHeader>
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
                            <Button type="submit" color="success">Find Teacher</Button>
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
                                <th>Experinece (in years)</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.experience}</td>
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

export default FindWithId;
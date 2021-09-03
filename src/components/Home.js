import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Home = () => {

    // Document title function

    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <div className="row">
            <div class="col-1"></div>
            <div class="col-10">
                <Card>
                    <CardBody className="text-center">
                        <div className="row">
                            <div class="col-6">
                                <CardHeader><img src="/images/homebanner.png" alt="logo" className="img-fluid" /></CardHeader>
                            </div>
                            <div class="col-6">
                                <CardHeader>Welcome to the Application</CardHeader>
                                <CardBody>
                                    <br />
                                    <p className="text-start text-muted">
                                        This application is made with the aim of organising students and
                                        teachers data with ease.
                                        It provides functions like :
                                        <br />
                                        - Adding students and teachers data.<br />
                                        - Deleting the data.<br />
                                        - Viewing all data.<br />
                                        - Updating the data.<br />
                                    </p>
                                    <hr />
                                    <p className="text-start text-muted">
                                        Application is made with use of following techstacks :
                                        <br />
                                        - Spring Boot Rest API at backend.<br />
                                        - React at frontend.<br />
                                        - MySQL at database side.<br />
                                        - Reactstrap for styling components.<br />
                                    </p>
                                </CardBody>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
            <div class="col-1"></div>
        </div>
    );
}

export default Home;
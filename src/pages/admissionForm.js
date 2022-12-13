import React, { useState } from 'react';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import Select from 'react-select';


const AdmissionForm = (props) => {
    const [admissionDetails, setAdmissionDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        batch: "",
        fee: "500"
    });

    let handleClick = () => {
        if (admissionDetails.age < 18) {
            alert("age should be greater than 18 and less than 65")
        }
        else {
            localStorage.setItem('isregistered', true)
            props.history.push('/paymentPage', { admissionDetails: admissionDetails })
        }


    }

    return (

        <div className='card-page'>
            <Card style={{ width: "50rem", height: "30rem" }} className='shadow-2-strong'>
                <Card.Body>
                    <Card.Title style={{ fontSize: '23px' }}>Admission Form </Card.Title>
                    <Form >
                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={2} >
                                <span className='option-name' style={{ marginTop: '40px' }} >Name</span>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Control placeholder="Fist Name" onChange={(e) => setAdmissionDetails({ ...admissionDetails, firstName: e.target.value })} />
                                </Form.Group><br />
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Control placeholder="Last Name" onChange={(e) => setAdmissionDetails({ ...admissionDetails, lastName: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '5px' }}>
                            <Col sm={2}>
                                <span className='option-name' style={{ marginTop: '40px' }} >Email</span>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Control placeholder="abc@gmail.com" onChange={(e) => setAdmissionDetails({ ...admissionDetails, email: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={2}>
                                <span className='option-name' style={{ marginTop: '40px' }} >Phone</span>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Control placeholder='9898989898' onChange={(e) => setAdmissionDetails({ ...admissionDetails, phone: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={2}>
                                <span className='option-name' style={{ marginTop: '40px' }} >Gender</span>
                            </Col>

                            <Col sm={3}>
                                <Form.Group>
                                    <Select options={[
                                        { label: "Male", value: "Male" },
                                        { label: "Female", value: "Female" },
                                        { label: "Transgender", value: "Transgender" }
                                    ]}


                                        onChange={(e) => setAdmissionDetails({ ...admissionDetails, gender: e.value })}
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={2}>
                                <span className='option-name' style={{ marginTop: '40px', marginLeft: '70px' }}>Age</span>
                            </Col>

                            <Col sm={3}>
                                <Form.Group>
                                    <Form.Control placeholder="18-65" onChange={(e) => setAdmissionDetails({ ...admissionDetails, age: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }} >
                            <Col sm={2}>
                                <span className='option-name' style={{ marginTop: '40px' }} >Fee</span>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Control value="500/-" disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" style={{ marginTop: '20px' }} onClick={handleClick}>Submit</Button>

                    </Form>

                </Card.Body>
            </Card>

        </div>

    );
};



export default AdmissionForm;
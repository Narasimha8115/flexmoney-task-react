import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import './style.css';
import Select from 'react-select';
import moment from 'moment';




function PaymentPage(props) {

    // const [paymentWay,setPaymentWay] = useState({
    //     batch:""
    // });
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
    const [isDisabled, setisDisabled] = useState(false);

    useEffect(() => {
        let isregistered = localStorage.getItem('isregistered')
        console.log(isregistered)
        if (isregistered === null) {
            props.history.push('/')
        } else {
            if (props.location.state) {
                setAdmissionDetails(props.location.state.admissionDetails)
            }
        }
    }, [props.history]);

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (admissionDetails.age < 18) {
            alert("Age must be greater than 18 and less than 65")
            return;
        }

        await axios.post("http://127.0.0.1:8000/create/", ({
            firstName: admissionDetails.firstName,
            lastName: admissionDetails.lastName,
            fullName: admissionDetails.firstName + " " + admissionDetails.lastName,
            email: admissionDetails.email,
            phone: admissionDetails.phone,
            gender: admissionDetails.gender,
            age: admissionDetails.age,
            session: admissionDetails.batch
        }), { headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                console.log(res)
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('created_at',res.data.created_at)    
                props.history.push('/pay', { admissionDetails: admissionDetails })

                alert("The admission submitted sccuessfully,proceeding to the payment section")
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        let current_date = new Date(Date.now())
        let created_at = new Date(localStorage.getItem('created_at'))
        if(current_date.getMonth() === created_at.getMonth() && current_date.getFullYear() === created_at.getFullYear()){
            setisDisabled(true)
        }

    }, [])

    return (
        <>

            <div className='payment'>
                <Card style={{ width: "30rem" }} className='card-payment'>
                    <Card.Body >
                        <Form onSubmit={handleSubmit}>
                            <Row style={{ marginTop: '20px' }} >
                                <Col sm={4} style={{ marginTop: '5px' }}>
                                    <span className='option-name' style={{ marginTop: '40px', marginLeft: '40px' }} > Batch </span>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group>
                                        <Select  options={[
                                            { label: "6AM - 7AM", value: "6AM - 7AM" },
                                            { label: "7AM - 8AM", value: "7AM - 8AM" },
                                            { label: "8AM - 9AM", value: "8AM - 9AM" },
                                            { label: "5PM - 6PM", value: "5PM - 6PM" }

                                        ]} onChange={(e) => setAdmissionDetails({ ...admissionDetails, batch: e.value })}  isDisabled={isDisabled}/>
                                    </Form.Group>
                                </Col>
                            </Row><br/>
                            {isDisabled && <small className='text-danger'>You have already payment this month, kindly change your batch next month</small>}
                            <center>
                                <Button type="submit" style={{ marginTop: '20px' }} >Proceed to Payment</Button>
                            </center>
                        </Form>
                    </Card.Body>

                </Card>

            </div>

            <div>
                <center>
                    {!isDisabled && <h5 style={{ textAlign: 'center', marginTop: '30px', fontSize: '12px', backgroundColor: 'yellow', padding: '10px', width: '600px' }} className='payment'>Note: Fix the session that's best for you ,Beacuse you are not allowed to change till next month </h5>}
                </center>
            </div>

        </>

    );
}

export default PaymentPage;
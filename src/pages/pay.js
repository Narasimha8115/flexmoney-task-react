import React,{useState} from 'react';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import './style.css';




function Pay() {
    const [retriverData,setRetriverData]=useState({
        fullName:"",
        fee:"500",
        cardNumber:"",
        expiryDate:"",
        Cvv:""
    })

    let handlePay = () =>{
        alert("payment proccessed successfully,Click on Home button ")
    }
    return ( 
        <div className='payment'style={{ color:'black',fontSize:'18px' }}>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Payment Details
                    </Card.Title>
                    <Form onSubmit={handlePay}>
                    <Row>
                    <Col sm={12}>
                            <Form.Group>
                                <Form.Label style={{fontSize:'12px',fontWeight:'600'}}>Card Number</Form.Label>
                                <Form.Control placeholder='0000 0000 0000 0000' onChange={(e)=> setRetriverData({...retriverData,cardNumber:e.target.value})} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                 
                    <Row>
                    <Col sm={6}>
                            <Form.Group>
                                <Form.Label style={{fontSize:'12px',fontWeight:'600'}} >Card Holder Name</Form.Label>
                                <Form.Control placeholder="Elon musk" ></Form.Control>
                            </Form.Group>
                        </Col>
                        

                        <Col sm={6}>
                            <Form.Group>
                                <Form.Label style={{fontSize:'12px',fontWeight:'600'}}>Expiry Date</Form.Label>
                                <Form.Control placeholder='MM/YY' onChange={(e)=> setRetriverData({...retriverData,expiryDate:e.target.value})} required/>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Group>
                                <Form.Label style={{fontSize:'12px',fontWeight:'600'}}>Cvv</Form.Label>
                                <Form.Control placeholder='123' onChange={(e)=> setRetriverData({...retriverData,Cvv:e.target.value})} required></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group>
                                <Form.Label style={{fontSize:'12px',fontWeight:'600'}}>Amount</Form.Label>
                                <Form.Control value={`${retriverData.fee}/-`} disabled ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                     <center>
                     <Button type="submit" style={{ marginTop:'20px',width:'100px'}} >Pay</Button>

                     </center>
                      
                    </Form>
                </Card.Body>

            </Card>


        </div>
     );
}

export default Pay;
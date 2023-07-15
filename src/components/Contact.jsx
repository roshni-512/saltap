import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function Contact() {
  return (
    <div  style={{ backgroundColor: "#88D5B0", padding: '1px' ,overflowX:'hidden'}}>
    <div className="">
       <div className="row d-flex justify-content-around">
       
               <div className='col-12 col-md-5 mt-5 mb-5' >
             <p style={{fontFamily:'Alfa Slab One',fontSize:'84px' }} id='info1'>Get In Touch</p>
             <p style={{fontWeight:'800',fontSize:'26.7px',lineHeight:'42.3px' }}> <img src={"./images/call.png"} style={{ width: '5%' }} className='text-center' alt='' />+91-9090909090</p>
             <p style={{fontWeight:'800',fontSize:'26.7px',lineHeight:'42.3px' }}><img src={"./images/email.png"} style={{ width: '5%' }} className='text-center' alt='' /> info@roini.com</p>
             <Button  variant='dark' className=' btn56 mt-2' style={{width:'45%',padding:'20px',border:'none',fontSize:'28.16px'}}>Take A Demo</Button>
               </div>
               <div className='col-12 col-md-5  mb-5'>
               <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
                    <Form.Control type="name" placeholder="Your Name" style={{fontSize:'24px'}}/>
                    </Form.Group>
                          <Row className='mt-3'>
                          <Col>
                     <Form.Control placeholder="Your email" style={{fontSize:'24px'}} />
                        </Col>
                         <Col>
                   <Form.Control placeholder="Your Phone" style={{fontSize:'24px'}}/>
                        </Col>
                        </Row>
                     <Row className='mt-3'>
                     <Col>
                    <Form.Control placeholder="Your Company" style={{fontSize:'24px'}} />
                      </Col>
                      <Col>
                           <Form.Control placeholder="Your position/role" style={{fontSize:'24px'}}/>
                      </Col>
                      
                            </Row>
                            <Col>
     
                        <Form.Control
                          as="textarea"
                            placeholder="Drop a line"
                            style={{ height: '100px',fontSize:'24px' }} className='mt-3'/>
                            
                      </Col>
                      <Col>
                      <Button   className=' mt-2' style={{width:'100%',padding:'20px',border:'none',fontSize:'28.16px',backgroundColor:'#10AB61'}}>Send</Button>
                      
                      </Col>
                        </Form>
               </div>
               </div>
       </div> 
   </div>
  )
}

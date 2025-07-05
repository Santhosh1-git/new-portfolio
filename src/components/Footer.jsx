import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../styles/Footer.css'
function Footer() {
  return (
    <>
      <Container fluid id='footer' >
        <Row>
            <Col lg={4} >
                <div className="footer_l1">
                <h1 className='name'>Santhoshkumar</h1>
                <h4 className='role' >aspiring web developer</h4>
                    <br />
                <p className='about_demo' >passionate about building user-friendly interfaces </p>
                <p className='about_demo' >and delivering high-performance web  </p>
                <p className='about_demo'> applications that solve real-world problems</p>
                 < p className='socila_icon' ><span> <i className="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span><i className="fa-brands fa-github" style={{color: "#8a8c8f"}}></i></span></p>
                </div>
            </Col>
            <Col lg={4} >
            <h4>links</h4>
                <p>home</p>
                <p>about</p>
                <p>skills</p>
                <p>project</p>
                <p>contact</p>
            </Col>
            <Col lg={4} >
                <h4>contact me</h4>
                 <div className="contact">
                  
                  <i className="fa-solid fa-location-dot" style={{color: "#188de7"}}></i><span>Thanjavur , Tamilnade</span>
                  
                    <br />
                  
                  <i className="fa-solid fa-envelope" style={{color: "#188de7"}} ></i><span>k.santhosh.ui@gmail.com</span>

                  <br />
                  
                  <i className="fa-solid fa-phone" style={{color: "#188de7"}}  ></i> <span>9566947648</span>

                </div>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer

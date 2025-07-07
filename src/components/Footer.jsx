import { Container,Row,Col } from 'react-bootstrap'
import '../styles/Footer.css'
function Footer() {
  return (
    <>
      <Container fluid id='footer_bg' >
      <Row>
        <Col lg={4} md={12} > 
          <div className="footer_head">
            <h1 className='name'>Hi i'm Santhoshkumar</h1>
      <h4 className='role' >aspiring web developer | </h4>

      <h4 className='role'>frontend developer</h4>
      <p className='about_demo mt-3 ' >passionate about building user-friendly interfaces </p>
      <p className='about_demo' >and delivering high-performance web  </p>
      <p className='about_demo'> applications that solve real-world problems</p>
       < p className='socila_icon' ><span> <i className="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span> <a target='_blank' href="http://github.com/Santhosh1-git"> <i className="fa-brands fa-github" style={{color: "#8a8c8f"}}></i></a> </span></p>
          </div>
         </Col>
        <Col lg={4} md={12} > 
          <div className="quick_links">
            <ul>
              <li> <a href="#home1"> home </a> </li>
              <li> <a href="#about"> about </a> </li>
              <li> <a href="#skill_nav"> skills </a> </li>
              <li> <a href="#project"> project </a> </li>
              <li> <a href="#contact"> contact </a> </li>
              
            </ul>
          </div>
         </Col>
        <Col lg={4} md={12} > 
            <div className="footer_contact">
                <i className="fa-solid fa-location-dot" style={{color: "#188de7"}}></i> <span> Thanjavur , TamilNade</span>
                  
                    <br />
                  
                  <i className="fa-solid fa-envelope" style={{color: "#188de7"}} > </i> <span> k.santhosh.ui@gmail.com</span>

                  <br />
                  
                  <i className="fa-solid fa-phone" style={{color: "#188de7"}}  ></i>  <span> 9566947648</span>
            </div>
         </Col>
      </Row>
      </Container>
    </>
  )
}

export default Footer

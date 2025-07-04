import Header from './components/Header'
import Vanta from './components/Vanta'
import './styles/Home.css'
import { Container,Row,Col } from 'react-bootstrap'
import Typwriter from "typewriter-effect";
function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Vanta/>
    <Container>
    <Row>
    <Col lg={7} md={12} >
      <div className="profile">
      <h1 className='name'>Hi i'm Santhoshkumar</h1>
      <h4 className='role' >aspiring web developer | </h4>

      <h4 className='role'>frontend developer</h4>
      <p className='about_demo mt-3 ' >passionate about building user-friendly interfaces </p>
      <p className='about_demo' >and delivering high-performance web  </p>
      <p className='about_demo'> applications that solve real-world problems</p>

      <button className='btn text-light b1  mt-2 ' > Download cv</button><button className='btn mt-2 bg-dark text-light b2 '> Contact me </button>
      
      < p className='socila_icon' ><span> <i class="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span><i class="fa-brands fa-github" style={{color: "#8a8c8f"}}></i></span></p>
      </div>
    </Col>
    <Col lg={6} ></Col>
    </Row>
    </Container>
    <center>
    <div className='scroll'>
       <p>scroll down</p>
      <span><i class="fa-solid fa-arrow-down" style={{ color: "#74C0FC"}} ></i></span>
    </div>
    </center>
      </div>
      {/* about section*/}
        <Container>
          <Row>
            <Col lg={6} >
              <div className="image">

              </div>
            </Col>
            <Col lg={6} >
              <div className="about_dtails">
                
              </div>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Home

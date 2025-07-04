import Header from './components/Header'
import Vanta from './components/Vanta'
import './styles/Home.css'
import { Container,Row,Col,Card,CardBody } from 'react-bootstrap'
import Typwriter from "typewriter-effect";
// project img
import ecom from './assets/projects/ecom.jpg'
import clg from './assets/projects/clg.jpg'
// about image
import aboutimg from './assets/aboutimg.jpg'
// skills json
import skillsdata from './components/Skills.json'
function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Vanta/>
    <Container>
    <Row id='home' >
    <Col lg={7} md={12} >
      <div className="profile">
      <h1 className='name'>Hi i'm Santhoshkumar</h1>
      <h4 className='role' >aspiring web developer | </h4>

      <h4 className='role'>frontend developer</h4>
      <p className='about_demo mt-3 ' >passionate about building user-friendly interfaces </p>
      <p className='about_demo' >and delivering high-performance web  </p>
      <p className='about_demo'> applications that solve real-world problems</p>

      <button className='btn text-light b1  mt-2 ' > Download cv</button><button className='btn mt-2 bg-dark text-light b2 '> Contact me </button>
      
      < p className='socila_icon' ><span> <i className="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span><i className="fa-brands fa-github" style={{color: "#8a8c8f"}}></i></span></p>
      </div>
    </Col>
    <Col lg={5} >
      <h1 className='text-light' >image</h1>
    </Col>
    </Row>
    </Container>
    <center>
    <div className='scroll'>
       <p>scroll down</p>
      <span><i className="fa-solid fa-arrow-down" style={{ color: "#74C0FC"}} ></i></span>
    </div>
    </center>
      </div>
      {/* about section*/}
        <Container fluid className='bg_color' >
          <Row id='about' >
            <Col lg={6} md={12}  >
              <div className="image">
                <img src={aboutimg} alt="image not found" />
              </div>
            </Col>
            <Col lg={6} md={12}  >
              <div className="about_details">
                <h6 className='title' >about me</h6>
                <h4 className='sec_heading' >aspiring web developer with a passion for olve real problems and delight users. </h4>

                <p>I enjoy collaborating with designers, backend developers, and clients to deliver projects that solve real-world problems. From responsive layouts to interactive features, my goal is to create experiences that not only look good but also work seamlessly across all devices.</p>

                <p>I’m always learning and staying up-to-date with the latest trends and technologies in the web development world. When I’m not coding, you can find me exploring new tools, contributing to open-source, or sharing knowledge with the community.</p>

              <div className="show_off">
                <Row>
                <Col lg={4}  >
                <center>
                   <div className="education">
                  <i className="fa-solid fa-user-graduate text- " style={{color: "#74C0FC"}}></i> 
                  <h4>education</h4>
                  <p className='qualification' >web developer and </p>
                  <p className='qualification' >Bsc cs,bharath college of </p> 
                  <p className='qualification' >science and management </p> 
                  <p className='qualification' >thanjavur</p>
                </div>    
                </center>
                </Col>
                <Col lg={4}>
                {/* <center> */}
                   <div className="experience">
                  <i className="fa-solid fa-briefcase" style={{color: "#63E6BE"}}></i>
                  <h4>experience</h4>
                  <p className='role' >web developer</p>
                </div>    
                {/* </center> */}
                </Col>
                <Col lg={4}>
                <center>
                   <div className="projects">
                  <i className="fa-solid fa-medal" style={{color: "#FFD43B"}}></i>
                  <h4>projects</h4>
                  <p className='role' >2+projects</p>
                </div>    
                </center>
                </Col>
                </Row>
                <div className="contact">
                  
                  <i className="fa-solid fa-location-dot" style={{color: "#188de7"}}></i><span>Thanjavur , Tamilnade</span>
                  
                    <br />
                  
                  <i className="fa-solid fa-envelope" style={{color: "#188de7"}} ></i><span>k.santhosh.ui@gmail.com</span>

                  <br />
                  
                  <i className="fa-solid fa-phone" style={{color: "#188de7"}}  ></i> <span>9566947648</span>

                </div>
              </div>  

              </div>
            </Col>
          </Row>
        </Container>
        {/* ---------------------------------------------- */}
                    {/* skills section */}
        {/* ---------------------------------------------- */}

          <Container fluid id='skill' >
            <Row id='skill_nav' >
        <div className="skills_section">
              <Col lg={12} >
              <center>
                <h6 className='title_head'>Expertise Areas</h6>
                <h4 className='title_skill' >skills & technologies</h4>
                <p className='sub_title' >Core Competencies</p>
              </center>
              </Col>

              <Row>
               {skillsdata.skills.map((e) => {
                 return (
                   <Col lg={4}  md={6} >
                    <div className="skills_head" key={e.id}>
                      <h4 className='heading'> <span> <i className={e.img} style={{color:e.color}} id='skills_icon'  ></i></span>  {e.title}</h4>
                        {e.items.map((item, i) => (
                          <p key={i} className='item'>{item}</p>
                        ))}
                    </div>
              </Col>
                  );
                })}
                </Row>
        </div>
            </Row>
          </Container>
          {/* --------------------------- */}
                {/* project section */}
          {/* --------------------------- */}
          <Container fluid id='bg_project'>
            <Container>

            <Row id='project' >
              <Col lg={12} >
              <center>
                <div className="project_section">
                <h6 className='title_head'>my work</h6>
                 <h4 className='title_skill' >projects</h4>
                <p className='sub_title' > A Selection of My Recent Work</p>
                </div>
              </center>
              </Col>
              <Col lg={6}>
                <div className="project_link">
                  <a className='link' target='_blank'  href="https://mix-ecom-web.netlify.app/">
                  <Card className='pra_col' >
                    <div className="img_flow">
                    <img src={ecom} alt="img not found" />
                    </div>
                    <CardBody className='project_body' >
                      <h4 className='project_title' >mini eCommerce website</h4>
                      <h4 className='project_title' >Everything You Love, Delivered to Your Doorstep</h4>
                      <p> developed a responsive eCommerce website with a modern, user-friendly interface. </p>
                      <div className="tools">
                        <p>html</p>
                        <p>css</p>
                        <p>javascript</p>
                        <p>react js</p>
                      </div>
                    </CardBody>
                  </Card>
                  </a>
                </div>
              </Col>
              <Col lg={6}  >
                <div className="clg_link">
                  <a  className='link' target='_blank' href="https://arsha-bharathi.netlify.app ">
                  <Card className='pra_col' >
                    <div className="img_flow">
                    <img src={clg} alt="img not found" />
                    </div>
                    <CardBody className='project_body' >
                      <h4 className='project_title' >mini College website</h4>
                      <h4 className='project_title' >Your Gateway to Campus Information</h4>
                      <p> I designed and developed a responsive college website focused on delivering clear information for students, faculty, and visitors. </p>
                      <div className="tools">
                        <p>html</p>
                        <p>css</p>
                        <p>javascript</p>
                        <p>react js</p>
                      </div>
                    </CardBody>
                  </Card>
                  </a>
                </div>
              </Col>
            </Row>
            </Container>
          </Container>
    </>
  )
}

export default Home

import Header from './components/Header'
import './styles/Home.css'
import { Container,Row,Col,Card,CardBody } from 'react-bootstrap'
// project img
import ecom from './assets/projects/ecom.jpg'
import clg from './assets/projects/clg.jpg'
// about image
import aboutimg from './assets/aboutimg.jpg'
// skills json
import skillsdata from './components/Skills.json'
// profile img
import profile from './assets/santhosh.jpg'
import Footer from './components/Footer';
// my cv
function Home() {
  return (
    <>
      <Header/>
    <Container fluid  id="home1"  >
    <Container  >
    <Row>
    <Col lg={6} md={6} >
      <div className="profile">
      <h1 className='name'>Hi I'm Santhoshkumar</h1>
      <h4 className='role' >aspiring web developer | </h4>

      <h4 className='role'>frontend developer</h4>
      <p className='about_demo mt-3 ' >passionate about building user-friendly interfaces </p>
      <p className='about_demo' >and delivering high-performance web  </p>
      <p className='about_demo'> applications that solve real-world problems</p>

      <button className='btn text-light b1  mt-2 ' >
          <a href="/assets/cv/Santhosh_resume.pdf" download="SanthoshKumar_CV.pdf">
          Download CV
        </a>


      </button>
      <button className='btn mt-2 bg-dark text-light b2 '> <a href="#contact"> Contact me </a> </button>
      
      < p className='socila_icon' ><span> <i className="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span> <a target='_blank' href="http://github.com/Santhosh1-git"> <i className="fa-brands fa-github" style={{color: "#8a8c8f"}}></i></a> </span></p>
      </div>
    </Col>
    <Col lg={6} md={6} >
      <div className="profile_img">
        <span className='stiker' >2+ projects</span>
          <img src={profile} alt="img not found" />
      </div>
    </Col>
    <Col lg={12} md={12} >
    <br />
    <br />
    <center>
    <div className='scroll'>
       <p>scroll down</p>
      <span><i className="fa-solid fa-arrow-down" style={{ color: "#74C0FC"}} ></i></span>
    </div>
    </center>
    </Col>
    </Row>
    </Container>
    </Container>
    
      {/* ------------------- */}
      {/* about section*/}
      {/* ------------------- */}

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
                <h4 className='sec_heading' >aspiring web developer with a passion for solve real problems and delight users. </h4>

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
                  
                  <i className="fa-solid fa-location-dot" style={{color: "#188de7"}}></i><span>Thanjavur , Tamil Nade</span>
                  
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
               {skillsdata.skills.map((e,index) => {
                 return (
                   <Col lg={4}  md={6} key={index} >
                    <div className="skills_head" >
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
          {/* -------------------- */}
          {/* contact */}
          {/* -------------------- */}

            <Container fluid id='contact' >
              <Container>

              <Row >
                <Col lg={12} >
                <center>
                  <div className="contect_section">
                   <h6 className='title_head'>contact me</h6>
                 <h4 className='title_skill' >Have a Question? Let’s Talk!</h4>
                  </div>
                </center>
                <br />
                </Col>
                <Col lg={6} md={6} >
                  <div className="contact_link">
                    <h4 className='title_skill' >lets start a conversation</h4>
                    <p className='sub_title'>Let’s Build Something Great Together</p>
                  
                  <div className="contact">
                  <i className="fa-solid fa-location-dot" style={{color: "#188de7"}}></i><span>Thanjavur , Tamilnade</span>
                    <br />
                    <br />
                  <i className="fa-solid fa-envelope" style={{color: "#188de7"}} ></i><span>k.santhosh.ui@gmail.com</span>
                  <br />
                  <br />
                  <i className="fa-solid fa-phone" style={{color: "#188de7"}}  ></i> <span>9566947648</span>
                  <br />
                  <br />
                  <h6>Follow Me</h6>
                     < p className='socila_icon' ><span> <i className="fa-brands fa-linkedin" style={{color: "#929496"}}></i></span>
      <span><a target='_blank' href="http://github.com/Santhosh1-git"> <i className="fa-brands fa-github" style={{color: "#8a8c8f"}}>  </i> </a>   </span></p>
                </div>

                  </div>
                </Col>
                <Col lg={6} md={6} >
                <div className="message_send">
                   <h4 className='title_skill' >send me a message</h4>
                   <Row>

                    <Col lg={6} >
                    <div className="name_email">
                    <span>name</span><br />
                    <input type="text" />
                    </div>
                    </Col> 

                    <Col lg={6} >
                    <div className="name_email">
                    <span>email</span><br />
                    <input type="text" />
                    </div>
                    </Col>

                    <Col lg={12}>
                      <div className="subject">
                      <span>subject</span><br />
                    <input type="text" />
                      </div>
                    </Col>
                    <Col lg={12} >
                    <div className="message">
                    <span>message</span><br />
                      <textarea name="text" ></textarea>
                      <button className='btn btn-info ' >send message</button>
                      </div>
                    </Col>
                   </Row>
                </div>
                </Col>
              </Row>
              <br />
              <br />
              </Container>
            </Container>
            <Footer/>

    </>
  )
}

export default Home

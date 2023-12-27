import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import hero from'../Assets/hero.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { homeprojectAPI } from '../services/allAPI'


function Home() {
  //state to store token
  const [isLogin, setIsLogin] = useState(false);

  //state to store homeproject
  //initial value should be an empty array
  const [homeProject, setHomeProject] = useState([])

  useEffect(() => {
    if(sessionStorage.getItem('tocken')){
      setIsLogin(sessionStorage.getItem('tocken'));
    }
    else{
      setIsLogin("")
    }
    
  },[])
  console.log(isLogin);


  //function to getHomeProject
  const getHomeProject = async()=>{
    const result = await homeprojectAPI()
    console.log(result.data);
    setHomeProject(result.data)
  }

  useEffect(()=>{
    getHomeProject()
  },[])

  return (
    <>
    <Header isLogin={isLogin} />
      
        <div className="container p-5">
          <Row className='align-items-center p-4'>
            <Col sm={12} md={6} lg={6}>
              <div className='ms-5'>
                <h1>Innovative Software Development Showcases</h1>
                <p>Explore a world of innovative software projects</p>
                { isLogin?
                  <Link to={'/dashboard'}><Button style={{color:'white',background:'black', border:'none'}} className='mb-5'>Manage Project <i class="bi bi-arrow-right"></i></Button></Link>:
                <Link to={'/login'}><Button style={{color:'white',background:'black', border:'none'}} className='mb-5'>Get Started <i class="bi bi-arrow-right"></i></Button></Link>}
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src={hero} alt="Project Image" style={{width:'80%'}} />
            </Col>
          </Row>
        </div>

        {/* section for all projects */}
        <div className='all-projects p-5 ' style={{background:'#fafafa'}}>
          <div className="text-center">
            <h1>Explore our projects</h1>
            <div className="d-flex justify-content-center flex-wrap mb-5 mt-5">

              {homeProject?.length>0?
                homeProject.map((item)=>(
                  <div className="ms-5 mb-4" style={{width:'400px'}}>
                <ProjectCard project = {item}/>
              </div>))
                 :null
              }

              {/* <div className="ms-5 mb-4" style={{width:'400px'}}>
                <ProjectCard/>
              </div>

              <div className="ms-5 mb-4" style={{width:'400px'}}>
                <ProjectCard/>
              </div> */}

            </div>
            <div className='text-center'>
              <Button style={{background:'black',color:'white',border:'none'}}>
                <Link style={{textDecoration:'none' , color:'white'}} to='/project'> See more projects </Link>
              </Button>
            </div>
          </div>
        </div>

      
      
    </>

    

  )
}

export default Home

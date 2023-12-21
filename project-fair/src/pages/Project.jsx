import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'

function Project() {
  return (
    <>
      <Header/>
      <div style={{height:'100vh',marginTop:'100px'}} className='container'>
        <div className="conatainer d-flex flex-column justify-content-center align-items-center">
          <h1 >All Projects</h1>
          <div className='d-flex justify-content-center align-items-center mt-3  w-25'>
            <input type="text" className='container form-control ' placeholder='Search by technologies'/>
            <i style={{marginLeft:'-50px',color:'lightgray'}} class="bi bi-search"></i>
          </div>
        </div>
  
        <Row className='mb-5 mt-5'>
          <Col  sm={12} md={6} lg={6}>
            <ProjectCard/>
  
          </Col>
        </Row>
      </div>
    </>
   
  )
}

export default Project
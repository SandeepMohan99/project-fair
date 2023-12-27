import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import {allProjectAPI} from '../services/allAPI'
function Project() {

  //state to store the projects to get allprojects

  const [allProject , setAllProject] = useState([])

  //state to stote the searchkey
  const [searchKey , setSearchKey] = useState("")

  const getAllProject = async()=>{
    if(sessionStorage.getItem('tocken')){
      const token = sessionStorage.getItem('tocken')

      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
       }

       const result = await allProjectAPI(searchKey,reqHeader)
       console.log(result.data);
       setAllProject(result.data)
    } 
  }
  console.log(searchKey);

  useEffect(()=>{
   getAllProject()
  },[searchKey])

  return (
    <>
      <Header/>
      <div style={{height:'100vh',marginTop:'100px'}} className='container'>
        <div className="conatainer d-flex flex-column justify-content-center align-items-center">
          <h1 >All Projects</h1>
          <div className='d-flex justify-content-center align-items-center mt-3  w-25'>
            <input type="text" className='container form-control ' value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder='Search by technologies'/>
            <i style={{marginLeft:'-50px',color:'lightgray'}} class="bi bi-search"></i>
          </div>
        </div>
  
        <Row className='mb-5 mt-5 container-fluid'>
          {
            allProject?.length>0?
            allProject.map((item)=>(
              <Col className='mb-5 mt-5'  sm={12} md={6} lg={6}>
            <ProjectCard project={item}/>
  
          </Col>))
          :<p>Nothing to Display</p>
          }
        </Row>
      </div>
    </>
   
  )
}

export default Project
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard({Dashboard}) {

  const [username,setUsername ] = useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem('exisitingUser')).username)
  })
  console.log(username);
  return (
    <div style={{height:'100vh'}}>
      <Header Dashboard />
      
      
        <Row className='container-fluid mt-5'>
        <h3 className='mt-3 ms-5'>Hola {username}</h3>
          <div className='d-flex gap-5'>
            <Col sm={12} md={8}>
              <MyProjects />
            </Col>
            <Col sm={12} md={4} >
              <Profile/>
            </Col>
          </div>

        </Row>
        
      
    </div>
  )
}

export default Dashboard
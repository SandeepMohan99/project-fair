import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return ( 
    <div className='card shadow p-5 mt-3' >
        <div className='d-flex'>
            <h3 className='ms-3'>My Projects</h3>
            <div className='ms-auto'>
                <AddProject/>   
            </div>
        </div>

        <div className='mt-5'>
            <div className="border d-flex align-items-center p-4">
                <h5>Project Title</h5>
                <div className="ms-auto p-2">
                    <button className='btn btn-info me-2' ><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-success me-2' ><i class="fa-brands fa-github"></i></button>
                    <button className='btn btn-danger me-2' ><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <p className="text-danger fw-bolder fs-4 mt-3">No project uploaded yet !!</p>
        </div>
    </div>

  )
}

export default MyProjects
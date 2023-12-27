import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addprojectAPI } from '../services/allAPI';


function AddProject() {

  //state to hold the value from the input box
  const [projectDetails , setProjectDetails] = useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectImage:""
  })

  console.log(projectDetails);


  //to hold the url of the image
  const [preview, setPreview] = useState("")


  useEffect(()=>{
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))  //new method to get url
    }
     
  },[projectDetails.projectImage])

  console.log(preview);


    //to hold the token
    const [token, setToken] = useState("")

    useEffect(()=>{
      if(sessionStorage.getItem("tocken"))
       { setToken(sessionStorage.getItem("tocken"))}
      else
      {setToken("")} 
     },[])

     console.log(token);

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    handleClose1()
  }
  const handleShow = () => setShow(true);

  //to set the values to empty
  const handleClose1 = ()=>{

    setProjectDetails({

    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectImage:""

    })
   
    setPreview("")

  }
  
  //to add the project

  const handleAdd = async(e)=>{
   e.preventDefault()

   const {title,language,github,website,overview,projectImage} = projectDetails

   if(!title|| !language || !github || !website|| !overview|| !projectImage){
    alert('Please fill the form completely')
  }

  else{

    //reqBody
    //if there is any uploading content from the system. we should send the body in the form of formData
    //1) create onject for the class formData

    const reqBody = new FormData()

    //2) add value to the formdata - append()

       reqBody.append("title",title)
       reqBody.append("language",language)
       reqBody.append("github",github)
       reqBody.append("website",website)
       reqBody.append("overview",overview)
       reqBody.append("projectImage",projectImage)

       if(token){const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
        }
        
        const result = await addprojectAPI(reqBody,reqHeader)
        console.log(result);
        
        if (result.status===200) {
          alert('Project Successfully Added')
          handleClose()
        } else {
          console.log(result);
          alert(result.response.data)
        }
        

      }

  }


  }


  return (
   

<>
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <label>
                <input type="file" style={{display:'none'}} value={projectDetails.projectImage?"":undefined} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3WCbmeUj34FEON-hD1H_cUu3grA3b8Wjxw&usqp=CAU"} alt="no image" />
              </label>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column'>
              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              </div>

              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Language' value={projectDetails.language} onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
              </div>

              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Github' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
              </div>

              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
              </div>

              <div className="mb-3 mt-3 w-100">
                <textarea type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    

    </>
  )
}

export default AddProject
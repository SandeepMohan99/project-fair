import React from 'react'
import Card from 'react-bootstrap/Card';
import videoplayer from '../Assets/Video-player.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';

function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(project.projectImage);

    return (
        <div>
            <Card style={{ width: '18rem' }} className='shadow' onClick={handleShow}>
                <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:videoplayer}  className='p-3 rounded-3' />
                <Card.Body>
                    <Card.Title className='text-info'>{project.title}</Card.Title>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-info'>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img src={videoplayer} width={'100%'} height={'250px'} alt="" />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h4>Description</h4>
                            <p>{project.overview}
                            </p>
                            <p><span className="fw-bolder">Technologies</span>: {project.language}</p>
                        </Col>
                    </Row>
                    <div className="d-flex mb-3">
                        <a href="https://github.com/albertfredy7/media-player-frontend-react" target='blank' style={{color:'black'}}><i class="bi bi-github fa-2x"></i></a>
                        <a href="https://media-player-frontend-react.vercel.app/" target='blank' style={{color:'black'}}><i class="bi bi-link-45deg fa-2x ms-5 "></i></a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard
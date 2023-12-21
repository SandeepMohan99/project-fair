import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <div className='card shadow p-5 mb-5 mt-3'>
            <div className='d-flex justify-content-between '>
                <h3>Profile</h3>
                <button className='btn btn-outline-black' onClick={() => setOpen(!open)}>
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
            <Collapse in={open}>
                <div className=' row justify-content-center  mt-5'>
                    <label htmlFor='profile' className='text-center'>
                        <input id='profile' type="file" style={{ display: 'none' }} />
                        <img
                            className='rounded-circle'
                            src='https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg'
                            width={150}
                            height={150}
                            alt=''
                        />
                    </label>
                    <div className='mt-5'>
                        <input type='text' className='form-control' placeholder='Github' />
                    </div>
                    <div className='mt-3'>
                        <input type='text' className='form-control' placeholder='Linkedin' />
                    </div>
                    <div className='mt-3'>
                        <button className='btn w-100' style={{ background: 'black', color: 'white' }}>
                            Update
                        </button>
                    </div>
                </div>
            </Collapse>
        </div>
    );
}

export default Profile;

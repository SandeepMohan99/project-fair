import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../Assets/hero.png'
import logo from '../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import { loginAPI, registerAPI } from '../services/allAPI'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    console.log(userData);

    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();
        const { username, email, password } = userData;
    
        if (!username || !email || !password) {
            toast.error('Please fill all the fields');
        } else {
            const result = await registerAPI(userData);
            
                console.log(result.data);
                if(result.status === 200){
                    toast.success(`${result.data.username} is registered successfully`);
                    setUserData({
                        username: "",
                        email: "",
                        password: ""
                    })
                    navigate('/login');
                }
                else {
                    toast.error(result.response.data);
                }
        }
    };

    const handleLogin = async(e)=>{
        e.preventDefault();
        const { email, password } = userData;
        if(!email || !password){
            toast.error('Please fill all the fields');
        }
        else{
            const result = await loginAPI(userData);
            console.log(result);
            if(result.status === 200){
                alert(`${result.data.existingUser.username} is logged in successfully`);
                sessionStorage.setItem("exisitingUser",JSON.stringify(result.data.existingUser));
                sessionStorage.setItem("tocken",(result.data.tocken));

                setUserData({
                    username: "",
                    email: "",
                    password: ""
                })

                //navigate to home page
                navigate('/');
            }
            else{
                alert(result.response.data);
            }
        }
    }
    const registerForm = register?true:false


    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center align-items-center">
                <Row className='container d-flex justify-content-center align-items-center p-5'>
                    <Col sm={12} md={6} lg={6}>
                        <img src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src={logo} width={200} alt="" />
                            <h4 className='mb-2'>{register ? 'Signup your account' : 'Sign into your account'}</h4>
                            <form>
                                {register && <div className="mb-3 mt-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" value={userData.username} onChange={(e) => setUserData({...userData,username:e.target.value}) }/>
                                </div>}
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" value={userData.email} onChange={(e) => setUserData({...userData,email:e.target.value}) } />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" value={userData.password} onChange={(e) => setUserData({...userData,password:e.target.value}) }  />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                {
                            registerForm?
                            <div>
                              <button onClick={handleRegister} className='btn btn-warning round mt-3'>Register</button>
                              <p className='mt-2'>Already a User? Click here to <Link to={'/login'} style={{color:'black'}}>Login</Link></p>
                            </div>:
                            <div>
                              <button onClick={handleLogin} className='btn btn-warning round mt-3'>Login</button>
                              <p className='mt-2'> New User? Click here to <Link style={{color:"black"}} to={'/register'}>Register</Link></p>
                           </div>
                          }

                            </form>
                            
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
        
    )
}

export default Auth
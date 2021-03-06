import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      
    const[error,setError]=useState('')
    const navigate=useNavigate()
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading
      ] = useSignInWithEmailAndPassword(auth)
    const handleEmail=event=>{
        setEmail(event.target.value)
    }
    
    const handlePassword=event=>{
        setPassword(event.target.value)
    }

   
    const handleSubmit=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const resetPassword=async()=>{
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
        toast('Please enter your email');
       }
    }
    if(user){
        navigate(from, { replace: true })
    }
    if(loading||sending){
        <Loading/>
    }
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-primary text-center mt-2'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail}  type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <ToastContainer/>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <p className=''>Forgot Password?<button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none '>Reset Now</button></p>
        <p>New to Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
    </div>
    );
};

export default Login;
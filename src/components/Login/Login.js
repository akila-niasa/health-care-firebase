import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const[error,setError]=useState('')
    const navigate=useNavigate()
    let location=useLocation()
    let from = location?.state?.from?.pathname || "/";

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
    if(user){
        navigate(from, { replace: true })
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <p>New to Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
    </div>
    );
};

export default Login;
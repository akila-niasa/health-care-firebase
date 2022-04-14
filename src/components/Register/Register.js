import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const navigate = useNavigate()

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

   
    const handleSubmit = event => {
        event.preventDefault()
        console.log('click');
        // if (password !== confirmPassword) {
        //     setError("your password doesn't match")
        // }
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        console.log(user);
        navigate('/allServices')
    }
    if(loading){
        <Loading/>
    }
    if(createError){
        console.log(createError.message);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="Password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: "red" }}>{error?.message}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="Check me out" className={`ps-2 ${agree?'text-primaary':'text-danger'}`} />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* <p>New to Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p> */}
        </div>
    );
};

export default Register;
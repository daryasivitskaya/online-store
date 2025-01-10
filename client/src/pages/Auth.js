import React from 'react';
import Container from 'react-bootstrap/Container';
import {Card, Form, Button} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts';
import { REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container  
        className='d-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 54}}>
            <Card style={{width:'600px'}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                    className='mt-3'
                    placeholder='Enter your email...' 
                    />
                      <Form.Control 
                    className='mt-3'
                    placeholder='Enter your password...' 
                    />
                </Form>
                <div className='d-flex justify-content-between align-items-center mt-3 ps-3 pe-3'>
                    {isLogin ?
                    <div className='d-flex'>
                        Don't have an account? <NavLink className='text-primary ps-1' to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                    </div>
                    :
                    <div className='d-flex'>
                        Already have an account? <NavLink className='text-primary ps-1' to={LOGIN_ROUTE}>Log in!</NavLink>
                    </div>
                    }
                    <Button variant="outline-dark">{isLogin ? 'Log in' : 'Sign up'}</Button>
                </div>
            </Card>
        </Container>
    );
};

export default Auth;
import React, { useContext } from 'react';
import {Context} from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <NavLink style={{color: 'lightgray', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none'}}to={SHOP_ROUTE}>CompDelo</NavLink>
        {/* <Nav>
            <Nav.Link href="#basket">Basket</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white', fontSize: '16px'}}>
            <Button variant="outline-light" onClick={() => navigate(`${ADMIN_ROUTE}`)}>Admin Panel</Button>
            <Button variant="outline-light" className='ml-2' onClick={() => navigate(`${LOGIN_ROUTE}`)}>Log out</Button>
        </Nav>
        :
        <Nav>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Authorization</Button>
        </Nav>
        }
        {/* </div> */}
        </Container>
      </Navbar>
    );
});

export default NavBar;
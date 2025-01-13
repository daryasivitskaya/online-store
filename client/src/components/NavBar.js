import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink
                    style={{ color: 'lightgray', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none' }}
                    to={SHOP_ROUTE}
                >
                    CompDelo
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white', fontSize: '16px' }}>
                        <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>
                            Admin Panel
                        </Button>
                        <Button variant="outline-light" className="ml-2" onClick={logOut}>
                            Log out
                        </Button>
                    </Nav>
                ) : (
                    <Nav>
                        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
                            Authorization
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
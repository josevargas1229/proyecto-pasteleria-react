import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';
export default function Navigation() {
    const { isLogged, logout, hasRole } = useAuth();
    return (
    <>
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: '#6B1B33' }}>
            <Navbar.Brand as={NavLink} to={routes.home} className='ms-5' style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src='logo20.png' alt='Logo' style={{ height: 30 }} className='me-3' />
                LIVELY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mx-auto " variant='underline'>
                    <Nav.Link as={NavLink} to={routes.catalogo}>PRODUCTOS</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.quienesSomos}>QUIENES SOMOS</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.faq}>FAQ</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.contacto}>CONTACTO</Nav.Link>
                    
                </Nav>
                <Nav className='me-4' variant='underline'>
                    {isLogged() ? (<>
                        <Nav.Link as={NavLink} to={routes.perfil}>
                            MI PERFIL
                        </Nav.Link>
                        <Nav.Link onClick={() => logout()}>
                            CERRAR SESIÓN
                        </Nav.Link>
                    </>
                    ) : (
                        <>
                            <Nav.Link as={NavLink} to={routes.login}>
                                LOGIN
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={routes.registro}>
                                REGISTRO
                            </Nav.Link>
                        </>
                    )}
                </Nav>


            </Navbar.Collapse>
        </Navbar>
        {isLogged()?(
            <Navbar collapseOnSelect expand="lg" variant='light' bg='light'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                {
                    <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>

                            {hasRole('admin') ? (<Nav className="ms-auto " variant='underline'>
                                    <Nav.Link as={NavLink} to={routes.usuariosA}>Usuarios</Nav.Link>
                                    <Nav.Link as={NavLink} to={routes.productsA}>Productos</Nav.Link>
                                    <Nav.Link as={NavLink} to={routes.administradoresA}>Administradores</Nav.Link>
                                    <Nav.Link as={NavLink} to={routes.iotA}>Iot</Nav.Link>
                            </Nav>

                            ) : hasRole('usuario') ? (
                                    <Nav.Link as={NavLink} to={routes.iotU + routes.iotDashboardU}>IoT</Nav.Link>
                                
                            ) : (<></>)}
                    </div>
                        }

                </Navbar.Collapse>
        
            </Navbar>):(<></>)
        }
    </>
    )
}

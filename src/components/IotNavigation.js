import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import routes from '../helpers/routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWifi} from '@fortawesome/free-solid-svg-icons'
export default function IotNavigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: '#4F1426' }}>
            <Navbar.Brand as={NavLink} to={routes.home} className='ms-5'>
            <FontAwesomeIcon icon={faWifi} style={{color: "#ffffff",height:30}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mx-auto " variant='underline'>
                    <Nav.Link as={NavLink} to={routes.iotU+routes.iotDashboardU}>Dashboard</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.iotU+routes.iotDevicesU}>Dispositivos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

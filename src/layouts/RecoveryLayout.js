import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { recoveryEmailRequest } from '../api/auth';
import { Container } from 'react-bootstrap';
import '../css/Recuperacion.css'
export default function RecoveryLayout() {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const response = await recoveryEmailRequest();
                // Supongamos que response es un objeto con la propiedad email
                setEmail(response.data.email);
            } catch (error) {
                console.error('Error al obtener el correo electrónico:', error);
            }
        };

        fetchEmail();
    }, []);

    return (
        <Container fluid style={{ width: '100%',display:'flex',justifyContent:'center' }} className='backGroundMethod p-4'>
            <div className='m-5 p-5'>
                <div style={{backgroundColor:'white',width:'30rem',borderRadius:15}} className='m-5 p-4 text-center'>

                    <h2>Recuperación de la cuenta</h2>
                    <br />
                    <p className='email'>{email}</p>
                    <p>Se enviará un email a la dirección de correo electrónico mostrada.</p>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/register/', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Registration failed: ' + error.response.data.error);
        }
    };

    return (
        <div className='input-flex'>
            <h1>Página de Registro! 🎆</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Criar conta</button>
            </form>
            <p>{message}</p>
            <p><Link to="/">Voltar</Link></p>
        </div>
    );
};

export default Register;

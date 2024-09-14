import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/login/', { email, password });
            setMessage(response.data.message);

            if (response.data.message === 'Login successful') {
                // Redirect to the dashboard page
                navigate('/dashboard');
            }
        } catch (error) {
            setMessage('Login failed: ' + error.response.data.error);
        }
    };

    return (
        <div className="login-form input-flex">
            <h1>Página de login! ✨</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
            <p>
                Não está registrado ainda? <Link to="/register">Clique aqui e crie sua conta!</Link>
            </p>
        </div>
    );
};

export default Login;

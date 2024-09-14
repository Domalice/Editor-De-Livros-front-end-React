import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const Dashboard = () => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        // Clear any session data if needed
        // For now, just navigate back to login
        navigate('/');
    };

    return (
        <div className="dashboard">
            <h2>Bem-vindo!</h2>
            <p>Você foi conectado com sucesso.</p>
            {/* Add a logout button */}
            <button onClick={handleLogout}>Sair ⚡</button>
        </div>
    );
};

export default Dashboard;

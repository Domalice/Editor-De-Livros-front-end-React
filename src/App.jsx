import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => (
    <Router>
        <div>
            <Routes>
                {/* Página inicial com login */}
                <Route path="/" element={<Login />} />

                {/* Página de registro */}
                <Route path="/register" element={<Register />} />

                {/* Página de boas vindas */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    </Router>
);

export default App;

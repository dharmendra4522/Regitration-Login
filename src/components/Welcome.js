import React from 'react';
import './Component.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div style={{ marginTop: "20rem" }}>
                <h2>Welcome to PopX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button onClick={() => navigate('/register')} className="btn-primary">Create Account</button>
                <button onClick={() => navigate('/login')} className="btn-primary">Already Registered? Login</button>
            </div>
        </div>
    );
};

export default Welcome;

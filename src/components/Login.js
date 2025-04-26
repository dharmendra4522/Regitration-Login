// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Component.css';

// const Login = () => {
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can add login validation here if needed
//         navigate('/account-settings'); // ✅ Move to Account Settings after login
//     };

//     return (
//         <div className="container">
//             <div style={{ marginTop: "20rem" }}>
//                 <h2>Signin to your PopX account</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

//                 {/* ✅ Form wrapper */}
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter email address"
//                         value={credentials.email}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Enter password"
//                         value={credentials.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button className="btn-primary" type="submit">
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Component.css';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass credentials data to AccountSettings page
        navigate('/account-settings', { state: { name: credentials.name, email: credentials.email } });
    };

    return (
        <div className="container">
            <div style={{ marginTop: "20rem" }}>
                <h2>Signin to your PopX account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <form onSubmit={handleSubmit}>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={credentials.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="btn-primary" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

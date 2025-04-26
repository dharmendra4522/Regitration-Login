// import React from 'react';
// import './Component.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         fullName: '',
//         phone: '',
//         email: '',
//         password: '',
//         company: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Save form data if needed
//         navigate('/account-settings');
//     };
//     return (
//         <div className="container">
//             <h2>Create your PopX account</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Full Name" />
//                 <input type="text" placeholder="Phone number" />
//                 <input type="email" placeholder="Email address" />
//                 <input type="password" placeholder="Password" />
//                 <input type="text" placeholder="Company name" />
//                 <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
//                 <div className="radio-group">
//                     <p>Are you an Agency?</p>
//                     <label>
//                         <input type="radio" name="agency" value="yes" />
//                         Yes
//                     </label>
//                     <label>
//                         <input type="radio" name="agency" value="no" />
//                         No
//                     </label>
//                 </div>
//                 <button className="btn-primary" type="submit">Create Account</button>
//             </form>
//         </div>
//     );
// };

// export default Register;


// src/components/Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Component.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRadioChange = (e) => {
        setFormData({ ...formData, agency: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass fullName and email to Account Settings page
        navigate('/account-settings', { state: { name: formData.fullName, email: formData.email } });
    };

    return (
        <div className="container">
            <h2>Create your PopX account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                />

                <div className="radio-group">
                    <p>Are you an Agency?</p>
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="yes"
                            checked={formData.agency === 'yes'}
                            onChange={handleRadioChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="no"
                            checked={formData.agency === 'no'}
                            onChange={handleRadioChange}
                        />
                        No
                    </label>
                </div>

                <button className="btn-primary" type="submit">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;


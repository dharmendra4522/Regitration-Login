// import React from 'react';
// import './Component.css';

// const AccountSettings = () => {
//     return (
//         <div className="account-settings-container container">
//             <h2>Account Settings</h2>

//             <div className="profile-card">
//                 <div className="profile-row">
//                     <img
//                         src="../media/pic.jpg"
//                         alt="Profile"
//                         className="profile-pic"
//                     />
//                     <div className="profile-info">
//                         <h3 className="profile-name">Marry Doe</h3>
//                         <p className="profile-email">Marry@Gmail.Com</p>
//                     </div>
//                 </div>

//                 <p className="profile-description">
//                     Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
//                     Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AccountSettings;


// src/components/AccountSettings.js

import React from 'react';
import { useLocation } from 'react-router-dom'; // ✅ useLocation
import './Component.css';

const AccountSettings = () => {
    const location = useLocation();
    const { name, email } = location.state || {}; // ✅ Get name and email from state

    return (
        <div className="container">
            <h2>Account Settings</h2>
            <div className="profile-row">
                <img
                    src="../media/pic.jpg"
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="profile-info">
                    <h3>{name || "Guest User"}</h3> {/* ✅ Show dynamic name */}
                    <p>{email || "guest@example.com"}</p> {/* ✅ Show dynamic email */}
                </div>
            </div>
            <p className="description">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
    );
};

export default AccountSettings;

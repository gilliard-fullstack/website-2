import React from 'react';

// Style
import './App.css';

function Top() {
    return (
        < div className="top" >
            {/* Logotipo */}
            < span className="right-logo" > Logotipo</span >
            {/* Right Navbar */}
            < ul className="right-navbar" >
                <li className="right-item">Home</li>
                <li className="right-item">Shop</li>
                <li className="right-item">Collections</li>
                <li className="right-item">Gallery</li>
            </ul >
            {/* Profile Image */}
            < span className="profileImage" ></span >
        </div >
    );
}

export default Top;
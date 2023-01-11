import React from 'react';

// Icons
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSquare } from 'react-icons/bi';

// Style
import './App.css';

function Left() {
    return (
        < div className="left-side" >

            < span className="magnifying-glass" > <GiHamburgerMenu /></span >

            < ul className="left-navbar" >
                <li className="left-item">Facebook</li>
                <li className="item-square"><BiSquare /></li>
                <li className="left-item">Twitter</li>
                <li className="item-square"><BiSquare /></li>
                <li className="left-item">Instagram</li>
            </ul >

            < span className="menu-button" > <FaSearch /></span >
        </div >
    );
}

export default Left;
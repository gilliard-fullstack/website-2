import React from 'react';

// components
import Top from './top/App';
import Bottom from './bottom/App';

// Icons
import { RiArrowRightSFill } from 'react-icons/ri';

// Style
import './App.css';

function Right() {
    return (
        <>
            {/* Right Side */}
            <div className="right-side">
                <Top />
                <Bottom />
            </div>
        </>
    );
}

export default Right;
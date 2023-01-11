import REact from 'react';

// Style
import './App.css';

// Icons
import { BiRightArrowAlt } from 'react-icons/bi';

// Images
import Hero from '../../../img/sofa.png';

function Bottom() {
    return (
        < div className="bottom" >
            {/* Bottom Left */}
            < div className="bottom-left" >
                {/* Number */}
                < span className="bottom-left-number" > 01.</span >
                {/* Text */}
                < span className="bottom-left-text" >
                    Design
                    {/* Green Dot */}
                    <span className="bottom-left-green-dot">
                        .
                    </span>
                </span >
                {/* Subtitle */}
                < span className="bottom-left-subtitle" >
                    Decorative indoor plans for all your enviroments
                </span >
                {/* Arrow */}
                < span className="bottom-left-arrow" >
                    <span className="bottom-left-icon">
                        <BiRightArrowAlt />
                    </span>
                    See more
                </span >
                {/* Video Box */}
                < div className="bottom-left-video-box" >
                </div >
            </div >
            <div className="bottom-right">
                {/* Plus Button */}
                <div className="bottom-right-plus-btn-1 bottom-right-plus-btn">+</div>
                {/* Plus Button */}
                <div className="bottom-right-plus-btn-2 bottom-right-plus-btn">+</div>
                {/* Bottom Right */}
                <img className="right-side-hero" src={Hero} alt="" />
            </div>
        </div >
    );
}

export default Bottom;
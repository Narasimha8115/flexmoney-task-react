import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header '  >
            <Link to="#" className='logo-container'>
                YogaShala
            </Link>
            <div className='options'>
                <Link to="/paymentPage" className='option'>Home</Link>
                <Link to="#" className='option'>About</Link>
                <Link to="#" className='option'>Contact Us </Link>
            </div>

        </div>

    );

}

export default Header;

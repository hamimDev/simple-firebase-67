import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center'>
            <Link className='mr-10' to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;
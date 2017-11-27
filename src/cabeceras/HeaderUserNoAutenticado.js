import React from 'react';
import {Link} from 'react-router-dom';

const HeaderUserNoAutenticado = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
        </nav>
    );
};

export default HeaderUserNoAutenticado;
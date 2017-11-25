import React from 'react';
import {Link} from 'react-router-dom';

const HeaderUserNoAutenticado = () => {
    return (
        <nav>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default HeaderUserNoAutenticado;
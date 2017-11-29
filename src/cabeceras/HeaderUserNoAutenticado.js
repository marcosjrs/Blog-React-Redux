import React from 'react';
import {Link} from 'react-router-dom';

const HeaderUserNoAutenticado = () => {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/signup">Registrarse</Link></li>
            </ul>
        </nav>
    );
};

export default HeaderUserNoAutenticado;
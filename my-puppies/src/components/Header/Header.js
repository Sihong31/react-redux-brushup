import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = (props) => {
    console.log('header', props)
    return (
        <div className="Header container-fluid">
            <div className="row">
                <div className="Header-content col">
                    <div className="Header-logo">
                        <Link to="/">
                            <img src={ logo } alt="Logo"></img>
                        </Link>
                    </div>
                    <div className="Header-text">
                        <button type="button" className="btn btn-outline-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
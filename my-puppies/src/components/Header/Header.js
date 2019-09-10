import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="Header container-fluid">
            <div className="row">
                <div className="Header-content col">
                    <div className="Header-logo">
                        <img src={ logo } alt="Logo"></img>
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
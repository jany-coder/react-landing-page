import React from 'react';
import logo from '../../asset/logo.png';
import './nav.css';

const Nav = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="home">
                        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link nav-text" aria-current="page" href="home">Open Projects</a>
                            <a class="nav-link nav-text" href="feature">Operator Owner</a>
                            <a class="nav-link nav-text" href="pricing">Investor</a>
                            <a class="nav-link nav-text" href="pricing">How It Works</a>
                        </div>
                    </div>
                </div>

            </nav>
    );
};

export default Nav;
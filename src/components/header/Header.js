import React from 'react';
import './Header.css';
import headerImg from '../../asset/header-img.png';
import Nav from './../nav/Nav';

const Header = () => {
    return (
        <>
            <header class="container-fluid header-section">
                <Nav></Nav>
                <div className="header-container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 header-p d-flex align-items-center">
                            <div class="header-left">
                                <p>Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet. </p>
                                <button class="btn-contact mt-5">Contact Us</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 header-img">
                            <img src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
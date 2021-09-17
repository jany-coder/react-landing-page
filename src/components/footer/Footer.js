import React from 'react';
import './Footer.css';
import logo from '../../asset/logo.png';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div class="d-md-flex d-sm-flex d-lg-flex d-lg-row flex-md-row flex-sm-column text-center justify-content-center">
                    <div class="p-3 text-style">Lorem Ipsum</div>
                    <div class="p-3 text-style">Lorem Ipsum</div>
                    <div class="p-3 text-style">Lorem Ipsum</div>
                    <div class="p-3 text-style">Lorem Ipsum</div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="line"></div>
                </div>

                <div class="footer-logo d-flex justify-content-center">
                    <img src={logo} alt="" />
                </div>

                <div class="footer-icon d-flex justify-content-center">
                    <div class="icon-footer">
                        <FaTwitter />
                    </div>
                    <div class="icon-footer">
                        <FaLinkedinIn />
                    </div>
                    <div class="icon-footer">
                        <FaInstagram />
                    </div>
                    <div class="icon-footer">
                        <FaFacebookSquare />
                    </div>
                </div>
                <div class="footer-bottom-text text-center">
                    <p>Terms of service - Privacy policy -  © 2021 Tritatech</p>
                    <p>Website By TritaTech</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>© 2024 Rayhan Kimi Nabiel Athallah</p>
                <div className="social-icons">
                    <a href="#">Github<i className="fab fa-github"></i></a>
                    <a href="#">LinkedIn<i className="fab fa-linkedin"></i></a>
                    <a href="#">Contact<i className="fab fa-contact"></i></a>
                </div>
            </div>
            {/*<div className="footer-right">*/}
            {/*    <ul>*/}
            {/*        <li><a href="#projects">Projects</a></li>*/}
            {/*        <li><a href="#about">About</a></li>*/}
            {/*        <li><a href="#contact">Contact</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </footer>
    );
};

export default Footer;

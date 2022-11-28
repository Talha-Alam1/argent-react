import React from 'react';
import Logo from '../images/logo.svg';

function footer() {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <a href="/"><img src={Logo} alt="logo" /></a>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="column products">
                            <h4>Products</h4>
                            <ul>
                                <li><a href="/company">About Argent</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/contact-form">Contact Form</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                                <li><a href="/papers">Download White Papers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="column">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="/company">About Argent</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/contact-form">Contact Form</a></li>
                                        <li><a href="/papers">Download White Papers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column">
                                    <h4>Docs</h4>
                                    <ul>
                                        <li><a href="/company">About Argent</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/contact-form">Contact Form</a></li>
                                        <li><a href="/papers">Download White Papers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column">
                                    <h4>Privacy Policy</h4>
                                    <ul>
                                        <li><a href="/company">About Argent</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/contact-form">Contact Form</a></li>
                                        <li><a href="/papers">Download White Papers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Performance Assured by Argent® Sentinel</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default footer
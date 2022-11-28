import React , { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../images/logo.svg';
import HelpIcon from '../images/support.svg';

let timeout
let scroll = 0
function Header() {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.onscroll = () => {
          if (timeout) {
            clearTimeout(timeout)
          }
    
          timeout = setTimeout(() => {
            if (scroll >= window.scrollY && window.scrollY > 10) {
              document.querySelector('.header').classList.add('sticky')
            } else {
              document.querySelector('.header').classList.remove('sticky')
            }
    
            scroll = window.scrollY
          }, 10)
        }
      }, [])
    return (
    <>
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <nav className="nav-menu">
                        <ul className={isActive ? "navbar-list" : "navbar-list active"}>
                            <li className="nav-item"><a href="/">Home</a></li>
                            <li className="nav-item"><a href="/products">Products</a></li>
                            <li className="nav-item"><a href="/papers">Papers</a></li>
                            <li className="nav-item"><a href="/company">Company</a></li>                                                               
                        </ul>
                        <div className={isActive ? "toggle" : "toggle on"} onClick={handleToggle}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </nav>
                    <div className="support-wrap">
                        <ul className="d-flex align-items-center">
                            <li>
                                <a href="/contact-form"><img src={HelpIcon} alt="Icon" />Instant Help</a>
                            </li>
                            <li>
                                <a href="javascript;" data-toggle="modal" data-target="#login" >Sign In / Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        {/* Modal */}
        <div className="modal fade login-model" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className="title">
                            <h2>Login</h2>
                            <p>Welcome Argent! Please enter your detail</p>
                        </div>
                        <div className="form">
                            <form action="" className="d-flex">
                                <div className="field-wrap">
                                    <label htmlFor="">Your Email</label>
                                    <input type="email" name="" />
                                </div>
                                <div className="field-wrap">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="" />
                                </div>
                                <div className="field-wrap mb-0">
                                    <input className="btn submit" type="submit" value="Continue" />
                                </div>
                            </form>
                        </div>
                        <div className="reg">
                            <p>Don’t have an account?<a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Header
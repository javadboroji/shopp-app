import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twitter } from '@fortawesome/free-solid-svg-icons'
import './index.css'
function Footer() {
    return (
        <footer className='mt-3'>
            <div className="footer-content">
                <h3> Shopping </h3>
                <p>Foolish Developer ---  source code.</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-google-plus-g" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                  
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022 <a href="#">Shopping</a>  </p>
                <div className="footer-menu">
                    <ul className="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
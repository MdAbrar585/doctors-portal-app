import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPen, faGripHorizontal, faCalendar, faUserFriends, faFileMedical, faCog, faHome } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <div>
             <footer className="page-footer font-small mdb-color lighten-3 pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="fc-1 col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                            {/* <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5> */}
                            <p>Here you can use rows and columns to organize your footer content.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum.</p>

                        </div>
                        <div className="fc-2 col-md-3">
                            <h5 className="font-weight-bold text-uppercase mb-4">Services</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <a href="/">Emergency Dental Care</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/package-lock.json">Check Up</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/">Treatment of Personal Diseases</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/"> Teeth Extraction</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/"> Check Up</a>
                                    </p>
                                </li>
                            </ul>

                        </div>
                        <div className="fc-3 col-md-3">
                            <h5 className="font-weight-bold text-uppercase mb-4">Oral Health</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>Emergency Dental Care</p>
                                </li>
                                <li>
                                    <p>Check Up</p>
                                </li>
                                <li>
                                    <p>Treatment for personal diseases</p>
                                </li>
                                <li>
                                    <p> Teeth Extraction</p>
                                </li>
                                <li>
                                    <p>Check Up</p>
                                </li>
                            </ul>
                        </div>
                        <div className="fc-4 col-md-2 ">
                            <h5 className="font-weight-bold text-uppercase mb-4">Order Us</h5>
                            <p>Anderkilla Redcriscent, Chittagong</p>
                            <a href="/" className="icon">
                            <FontAwesomeIcon icon={faHome} />
                            </a>
                            <a href="/" className="icon">
                            <FontAwesomeIcon icon={faPen} />
                            </a>
                            <a href="/" className="icon">
                            <FontAwesomeIcon icon={faUserFriends} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
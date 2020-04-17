import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div class="container">
                   
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/dashboard">Dashboard</a></li>
                            <li class="nav-item"><a class="nav-link" href="/bookedAppointment">Dental Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Reviews</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Contact Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
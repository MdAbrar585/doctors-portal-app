import React from 'react';
import chair from '../../images/Mask Group 1.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPen, faGripHorizontal, faCalendar, faUserFriends, faFileMedical, faCog, faHome } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <div className="cover">
            <div className="top-background"></div>
                <div className="row">
                    <div className="header-text col-md-6">
                        <h1>Your New Smile <br /> Start Here</h1>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe similique ullam iste placeat minima quos nemo minus temporibus neque eaque, fuga recusandae est ducimus illum deleniti corporis veritatis dolores accusamus!</p>
                        <a href="/appointment">Get Appointment</a>
                    </div>
                    <div className="chair-img col-md-6">
                        <img src={chair} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
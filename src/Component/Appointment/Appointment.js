import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fakeData from '../../fakeData';
import Service from '../Service/Service';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import chair from '../../images/Mask Group 1.png';
import './Appointment.css'

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const first6 = fakeData.slice(0, 7);
    const [services, setService] = useState([]);

    useEffect(()=>{
            fetch('https://doctors-portal588.herokuapp.com/serviceData',)
            .then(res=> res.json())
            .then(data=>{
                console.log("data from database",data);
                setService(data);
            })
    },[])

    const handleChange = date => {
        setStartDate(date);
        // setService(date);

    }
    console.log(services);

    // addToDatabaseCart(startDate);

    return (
        <div>
            <div>
                <div className="app-header">
                    <div className="app-calender">
                        <h1>Appointment</h1>
                        <DatePicker
                            selected={startDate}
                            onChange={handleChange}
                            value={startDate}
                            inline
                        />
                    </div>
                    <div className="app-img">
                        <img src={chair} alt=""/>
                    </div>
                </div>


                <p style={{ color: "#21D0E8", fontSize: "20px", fontStyle: "bold" }}>Available Appointment On {startDate.toLocaleString('default', { month: 'long' }) + ' ' + startDate.getDate() + ' ' + startDate.getFullYear()}</p>
            </div>
            <div className="row">
                {
                    services.map(sv =>
                        <div className="col-md-4">
                            <Service
                                service={sv}
                                startDate={startDate}
                            ></Service>

                        </div>
                    )
                }


            </div>

        </div>
    );
};

export default Appointment;
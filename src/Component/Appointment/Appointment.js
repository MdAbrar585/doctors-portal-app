import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fakeData from '../../fakeData';
import Service from '../Service/Service';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const first6 = fakeData.slice(0, 7);
    const [services, setService] = useState(first6);
    const handleChange = date => {
        setStartDate(date);
        // setService(date);

    }

    // addToDatabaseCart(startDate);

    return (
        <div>
            <div>
                <h1>Appointment</h1>
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    value={startDate}
                    inline

                />

                <p>Available Appointment On {startDate.toLocaleString('default',{month:'long'}) +' '+ startDate.getDate() +' '+ startDate.getFullYear()}</p>
            </div>
            <div className="row">
                {
                    services.map(sv =>
                        <div className="col-md-4">
                            <Service service={sv}></Service>
                        </div>
                    )
                }
                
            </div>

        </div>
    );
};

export default Appointment;
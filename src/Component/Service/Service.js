import React, { useState } from 'react';
import './Service.css';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useForm } from 'react-hook-form';
import TimePicker from 'react-dropdown-timepicker';
import {Dropdown} from 'primereact/dropdown';

const Service = (props) => {
    console.log(props);
    const { register, handleSubmit, errors } = useForm();

    const [open, setOpen] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const handleSend = () => {
    //     const sendData =  getDatabaseCart();
    //     setOpen(false);
    // };

    const onSubmit = data => {
        // const sendData =  getDatabaseCart();
        const information = data;
        fetch('https://doctors-portal588.herokuapp.com/placeInformation', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(information) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
            .then(order => {
                //clear local storage cart
                console.log("order placed", order);
                alert("success!!")
                
            })
        setOpen(false);
    }

    // const date = getDatabaseCart();
    console.log();
    const { name, time, space } = props.service;

    return (
        <div className="container">
            <div className="my-card">
                <div className="row">
                    <div className="card-body">
                        <h4>{name}</h4>
                        <p>{time}</p>
                        <p> <small>{space}</small></p>
                        <button onClick={handleClickOpen} className="btn btn-info">Book Appointment</button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle className="title" id="form-dialog-title">{name}</DialogTitle>
                            <DialogContent>
                                <form className="shipping-form" onClick={handleSubmit(onSubmit)} >
                                    {/* <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    /> */}

                                    {/* <Dropdown option={time } placeholder="select"/> */}
                                     <input defaultValue={time} name="time"  ref={register({ required: true })}/>
                                    {errors.time && <span>Name field is required</span>}

                                    <input name="name"  ref={register({ required: true })} placeholder="Your Name" />
                                    {errors.name && <span>Name field is required</span>}

                                    <input name="phoneNumber" ref={register({ required: true })} placeholder="Phone Number" />
                                    {errors.phoneNumber && <span>Phone Number field is required</span>}

                                    <input name="email" ref={register({ required: true })} placeholder="Email" />
                                    {errors.email && <span>Email field is required</span>}

                                   

                                    <input defaultValue={props.startDate.toLocaleString('default',{month:'long'}) +' '+ props.startDate.getDate() +' '+ props.startDate.getFullYear()} name="date" ref={register({ required: true })} placeholder="Date" />
                                    {/* {errors.date && <span>City field is required</span>} */}
                                    <input type="submit" />
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                    Cancel
                                     </Button>
                                {/* <Button onClick={handleSubmit} color="primary">
                                    Send
                                 </Button> */}
                            </DialogActions>
                                </form>
                                
                            </DialogContent>
                            
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
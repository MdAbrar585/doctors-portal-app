import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faPen, faGripHorizontal, faCalendar, faUserFriends, faFileMedical, faCog } from '@fortawesome/free-solid-svg-icons'
import './BookedAppoimtment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookedAppoimtment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portal588.herokuapp.com/information')
            .then(res => res.json())
            .then(data => {
                // console.log("data from database",data);
                setData(data);
                // console.log(data);
            })
    }, [])

    const handleChange = date => {
        setStartDate(date);
        // setService(date);
        const fixedDate = Object.keys(date);
        console.log(fixedDate);
        const datas = data.find(dte => dte.date !== date);
        setShowData(datas);
        console.log(showData);
    }

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    return (
        <div className="booked-body">
            <div className="dash-list">

                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faGripHorizontal} /> &nbsp; Dash Board</a></li>
                <li><a href="/appointment"> <FontAwesomeIcon icon={faCalendar} />  &nbsp;Appointment</a></li>
                <li><a href="/bookedAppointment"> <FontAwesomeIcon icon={faCalendar} />  &nbsp;Appointment List</a></li>
                <li><a href="/dashboard"><FontAwesomeIcon icon={faUserFriends} />  &nbsp;Patient</a></li>
                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faFileMedical} />  &nbsp;Prescription</a></li>
                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faCog} />  &nbsp;Setting</a></li>

            </div>

            <div className="calender">
                <div className="date-picker">
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        value={startDate}
                        inline
                    />
                </div>
                <div className="table">
                    <TableContainer component={Paper}>
                        <div className="tables-head d-flex justify-content-start">
                            <h6>Recent Appointment</h6>
                            <p style={{ color: "#21D0E8",fontStyle: "bold" }}>{startDate.toLocaleString('default', { month: 'long' }) + ' ' + startDate.getDate() + ' ' + startDate.getFullYear()}</p>
                        </div>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Time</TableCell>
                                    <TableCell align="left">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showData && data.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.time}</TableCell>
                                        <TableCell align="left"> <select className="btn btn-info" value="vis"><option value="visited">Visited</option><option value="notVisited">NotVisited</option></select> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>


        </div>
    );
};

export default BookedAppoimtment;
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
import { faSignOutAlt,faHome, faCoffee, faPen, faGripHorizontal, faCalendar, faUserFriends, faFileMedical, faCog, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import './DashBoard.css'
import { Card, CardContent } from '@material-ui/core';

const DashBoard = () => {

    const [information, setInformation] = useState([]);
    const [btn, setBtn] = useState(false);

    const handleClick = () => {
        console.log("Click");
        const val = true;
        setBtn(val);
    }

    useEffect(() => {
        fetch('https://doctors-portal588.herokuapp.com/information')
            .then(res => res.json())
            .then(data => {
                // console.log('data from database',data);
                setInformation(data);
                console.log(data);
            })
    }, [])
    console.log(information);
    // const info = information.slice(1, 10);
    // console.log(info)
    // const [infor, setInfo] = useState(info);
    // console.log(infor);

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();
    const k = information.length;


    return (
        <div className="dash-body">
            <div className="dash-list">

                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faGripHorizontal} /> &nbsp; Dash Board</a></li>
                <li><a href="/appointment"> <FontAwesomeIcon icon={faCalendar} />  &nbsp;Appointment</a></li>
                <li><a href="/bookedAppointment"> <FontAwesomeIcon icon={faCalendar} />  &nbsp;Appointment List</a></li>
                <li><a href="/dashboard"><FontAwesomeIcon icon={faUserFriends} />  &nbsp;Patient</a></li>
                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faFileMedical} />  &nbsp;Prescription</a></li>
                <li> <a href="/dashboard"> <FontAwesomeIcon icon={faCog} />  &nbsp;Setting</a></li>
                <li> <a href="/"> <FontAwesomeIcon icon={faSignOutAlt} />  &nbsp;Log out</a></li>

            </div>
            <div className="dash-content container">
                <div className="dash-content-part1">
                    <div className="row">
                        <div className="component col-md-3">
                            <Card style={{ backgroundColor: "#F35071" }}>
                                <CardContent className="cd-body">
                                    <div className="number">
                                        {k}
                                    </div>
                                    <div className="name">
                                        <p> Pending <br /> Appointment</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="component col-md-3">
                            <Card style={{ backgroundColor: "#3EA4F5" }}>
                                <CardContent className="cd-body">
                                    <div className="number">
                                        {k}
                                    </div>
                                    <div className="name">
                                        <p> Today's <br /> Appointment</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="component col-md-3">
                            <Card style={{ backgroundColor: "#00C689" }}>
                                <CardContent className="cd-body">
                                    <div className="number">
                                        {k}
                                    </div>
                                    <div className="name">
                                        <p> Total <br /> Appointment</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="component col-md-3">
                            <Card style={{ backgroundColor: "#FDA005" }}>
                                <CardContent className="cd-body">
                                    <div className="number">
                                        {k}
                                    </div>
                                    <div className="name">
                                        <p> Total <br /> Patient</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="dash-content-part2">
                    <TableContainer component={Paper}>
                        <div className="table-head d-flex justify-content-start">
                            <h6>Recent Appointment</h6>
                            <div className="week-btn">
                                <FontAwesomeIcon icon={faCalendarDay} />
                                <select className="select" name="week" id="">
                                    <option value="1">Week</option> </select>
                            </div>
                        </div>

                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Time</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Contact</TableCell>
                                    <TableCell align="left">prescription</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {information.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row._id}</TableCell>
                                        <TableCell align="left">{row.date}</TableCell>
                                        <TableCell align="left">{row.time}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.phoneNumber}</TableCell>
                                        <TableCell align="left"> <button className="btn btn-info">View</button> </TableCell>
                                        <TableCell align="left"><select className="btn btn-info" name="pending" id=""><option value="pending">Pending</option> <option value="visited">Visited</option></select> <button className="btn btn-success"><FontAwesomeIcon icon={faPen} /></button> </TableCell>
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

export default DashBoard;
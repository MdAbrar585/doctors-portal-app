import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Component/Appointment/Appointment';
import DashBoard from './Component/DashBoard/DashBoard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import BookedAppoimtment from './Component/BookedAppoimtment/BookedAppoimtment';

import AddsData from './Component/AddsData/AddsData';
import Error from './Component/Error/Error';
import Footer from './Component/Footer/Footer';




function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/appointment">
            <Header></Header>
            <Appointment></Appointment>
            <Footer></Footer>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
            <Footer></Footer>
          </Route>
          <Route path="/bookedAppointment">
            <BookedAppoimtment></BookedAppoimtment>
            <Footer></Footer>
          </Route>
          <Route path="/addData">
            <AddsData></AddsData>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

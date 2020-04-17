import React from 'react';
import fakeData from '../../fakeData';

const AddsData = () => {
    const  handleAdd = () =>{
        console.log(fakeData[0]);
        fetch('https://doctors-portal588.herokuapp.com/addServiceData',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(fakeData) // body data type must match "Content-Type" header
        })
        .then(res=>res.json())
        .then(data => {
            console.log("post success",data);
        })
    }
    return (
        <div>
            <h1>Add</h1>
            <br/>
            <br/>
            <br/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    );
};

export default AddsData;
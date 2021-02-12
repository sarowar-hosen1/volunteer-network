import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import unity from '../../images/1143.png';
import './MyEvent.css';


const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventTask, setEventTask] = useState([])


    useEffect(() => {
        fetch(`https://fathomless-spire-92887.herokuapp.com/myEvent?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: sessionStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(result => {
                setEventTask(result)
            })
    }, [])

    const handleDeleteEvent = (id) => {
        fetch(`https://fathomless-spire-92887.herokuapp.com/deleteTask/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Event Task deleted")
                }
            })
    }


    return (
        <div className='eventTask'>
            <Navbar />
            <div className="container mt-5">
                <button className='btn btn-outline-secondary float-right d-block'>Refresh</button>

                <div className="row">
                    {
                        eventTask.length > 0 ?
                            eventTask.map(event => <div className="col-md-6">
                                <div id='task' className="event-task-div">
                                    <img src={unity} alt="" />
                                    <div className="event-content">
                                        <h5>{event.organization}</h5>
                                        <p>{event.date}</p>
                                        <button onClick={() => handleDeleteEvent(event._id)} className='btn btn-link float-right'>Cencel</button>
                                    </div>
                                </div>
                            </div>)
                            :
                            <div class="spinner-border mx-auto" role="status"></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default EventTask;
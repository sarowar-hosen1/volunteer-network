import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/Group 1329.png';
import { BsPeople } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import './AdminDashboard.css';
import { UserContext } from '../../App';
import AddEvent from '../AddEvent/AddEvent';


const AdminDashboard = () => {
    const [toggle, setToggle] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allEvents, setAllEvents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fathomless-spire-92887.herokuapp.com/allTask?email=${loggedInUser.email}`, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                authorization: sessionStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(result => setAllEvents(result))
    }, [])

    const handleDeleteEvent = (id,) => {
        fetch(`https://fathomless-spire-92887.herokuapp.com/adminDeleteTask/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Event deleted successfully")
                }
            })

    }


    return (
        <div className='admin-dashboard'>
            <div className="row">
                <div className="col-md-2">
                    <div className="dashboard-panel">
                        <img onClick={() => history.push('/')} className='img-fluid mb-4' src={logo} alt="" />
                        <p> <i className='font-weight-bold'><BsPeople /></i> Volunteer register list</p>
                        <Link onClick={() => setToggle(false)} className='font-weight-bold'><i><FiPlus /></i>Add event</Link>
                    </div>
                </div>

                <div className="col-md-10">
                    {
                        allEvents.length > 0 ?
                            toggle ?
                                <div className="dashboard-content">
                                    <h3>Volunteer list</h3>
                                    <div className="table-div">
                                        <table className="table table-borderless">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Date</th>
                                                    <th>Volunteer list</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    allEvents.map(event =>
                                                        <tr>
                                                            <td className='text-capitalize'>{event.name}</td>
                                                            <td>{event.user}</td>
                                                            <td>{event.date}</td>
                                                            <td>{event.organization}</td>
                                                            <td onClick={() => handleDeleteEvent(event._id)} className='text-danger btn'><i><MdDelete /></i></td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                :
                                <AddEvent />

                            :
                            <div class="spinner-border mx-auto" role="status"></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
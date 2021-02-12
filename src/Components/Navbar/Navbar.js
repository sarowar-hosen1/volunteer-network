import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../images/logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="nav">
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <Link to='/' class="navbar-brand" href="#">
                            <img src={logo} alt=""/>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto">
                                <Link to='/' class="nav-link">Home</Link>
                                <Link to='/donations' class="nav-link">Donations</Link>
                                <Link to='/myEvent' class="nav-link">Events</Link>
                                <Link to='/blog' class="nav-link">Blog</Link>
                                <Link to='/contact' class="nav-link">Contact Up</Link>
                                <Link to='/register' class="nav-link btn btn-primary px-4">Register</Link>
                                <Link to='/admin' class="nav-link btn btn-secondary px-4">Admin</Link>
                                {loggedInUser && <Link to='myEvent' className='user-photo'><img src={loggedInUser.photo} alt=""/></Link>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
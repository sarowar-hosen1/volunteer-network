import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
                <Navbar />
                <div className="container">
                    <div className="header-content">
                        <h1>I grow by helping people in needed</h1>
                        <div className="search-box d-flex">
                            <input type="text" placeholder="Search" className="form-control" />
                            <button className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Header;
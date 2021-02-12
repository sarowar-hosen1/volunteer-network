import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <>  
            <div className='noMatch'>
                <h3>error</h3>
                <h6 className='text-danger' >404</h6>
                <Link to='/' className='btn btn-primary' >Go Home</Link>
            </div>
        </>
    );
};

export default NoMatch;
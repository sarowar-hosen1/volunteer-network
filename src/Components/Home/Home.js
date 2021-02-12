import React from 'react';
import Header from '../Header/Header';
import NetworkList from '../AllEventList/AllEventList';

const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <NetworkList></NetworkList>
        </div>
    );
};

export default Home;
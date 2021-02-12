import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TitleContext } from '../../App';
import './AllEventList.css';

const NetworkList = () => {
    const [allEvents, setAllEvents] = useState([])
    const [title, setTitle] = useContext(TitleContext)
    const history = useHistory();

    const handleNetwork = (title) => {
        setTitle(title)
        history.push('/register')
    }

    useEffect(() => {
        fetch('https://fathomless-spire-92887.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(result => {
                setAllEvents(result)
            })
    }, [])

    return (
        <div className='network-list'>
            <div className="container">
                {/* <button onClick={handleAllNetwork}>Add All</button> */}
                <div className="row">
                    {allEvents.length > 0 ?
                        allEvents.map(data => <div className="col-md-3 col-sm-6 col-xs-6">
                            <div onClick={() => handleNetwork(data.title)} className="network-content">
                                <img src={data.picture} alt="" />
                                <h6 id="title">{data.title}</h6>
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

export default NetworkList;
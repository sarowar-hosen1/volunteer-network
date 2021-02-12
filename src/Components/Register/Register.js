import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { TitleContext, UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';
import './Register.css';


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [title, setTitle] = useContext(TitleContext);
    const history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('https://fathomless-spire-92887.herokuapp.com/addMyEvent',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                history.push('/')
                alert("Event task added")

            }
        })
    };

    return (
        <div className='register'>
            <img onClick={() => history.push('/')} src={logo} alt="" />

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input className='form-control' defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} placeholder="Full Name" />
                    {errors.name && <span>Full name is required</span>}
                </div>
                <div className="form-group">
                    <input className='form-control' defaultValue={loggedInUser.email} name="user" ref={register({ required: true })} placeholder="Username or Email" />
                    {errors.user && <span>User is required</span>}
                </div>
                <div className="form-group">
                    <input className='form-control' name="date" ref={register({ required: true })} placeholder="Date" />
                    {errors.date && <span>Date is required</span>}
                </div>
                <div className="form-group">
                    <input className='form-control' name="description" ref={register({ required: true })} placeholder="Description" />
                    {errors.description && <span>Description is required</span>}
                </div>
                <div className="form-group">
                    <input className='form-control' defaultValue={title} name="organization" ref={register({ required: true })} placeholder="Organization" />
                    {errors.organization && <span>Oraganization requires</span>}
                </div>
                <input className='btn btn-primary w-100 py-2' type="submit" />
            </form>
        </div>
    );
};

export default Register;
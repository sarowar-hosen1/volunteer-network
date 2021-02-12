import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css';

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-spire-92887.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert('Event added successfully')
            }
        })
    };

    return (
        <div className='addEvent'>
            <h3>Add Event</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group title">
                    <label className='font-weight-bold'>Event title</label>
                    <input className='form-control' name="title" ref={register({ required: true })} placeholder='Title' />
                    {errors.title && <span>Title is required</span>}
                </div>
                <div className="form-group date">
                    <label className='font-weight-bold'>Event date</label>
                    <input className='form-control' name="date" ref={register({ required: true })} placeholder='Date' />
                    {errors.date && <span>Date is required</span>}
                </div>
                <div className="form-group">
                    <label className='font-weight-bold'>Description</label>
                    <input className='form-control' name="desc" ref={register({ required: true })} placeholder='Description' />
                    {errors.desc && <span>Description is required</span>}
                </div>

                <input className="btn btn-primary px-5" type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description } = service
    const navigate = useNavigate()
    const redirectToDetailsHandler = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div id='services' className='service'>
            <img src={img} alt="" />
            <h2>{name} </h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={() => redirectToDetailsHandler(id)} className='btn btn-primary'>Purchase {name}</button>
        </div>
    );
};

export default Service;
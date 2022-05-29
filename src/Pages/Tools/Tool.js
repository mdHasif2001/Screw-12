import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import { Link, useNavigate } from 'react-router-dom'


const Tool = ({ myTool }) => {
    const { _id, name, img, Description, MinimumQuantity, AvailableQuantity , Price} = myTool;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} height="300px" width="300px" alt="Screw" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Description: {Description}</p>
                <p>Minimum Quantity: {MinimumQuantity}</p>
                <p>Available Quantity: {AvailableQuantity}</p>
                <p>Price per unit: {Price}</p>
                <div class="card-actions justify-end">
                <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
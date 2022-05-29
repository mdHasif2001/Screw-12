import React from 'react';

const InfoCard = ({ img, cardTitle, description }) => {
    return (
        <div style={{
            background: '#94a3b8' }} className={`card lg:card-side bg-base-100 shadow-xl`}>
            
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
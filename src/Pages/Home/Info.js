import React from 'react';
import InfoCard from './InfoCard';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div>
            <p className='text-center text-xl text-primary font-bold mb-5'>Info</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <InfoCard cardTitle="Our Locations"
            description="We have too many location to provide on for more information you should contact us" 
            img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" description="You can contact us 24/7" img={phone}></InfoCard>
        </div>
    </div>

    );
};

export default Info;
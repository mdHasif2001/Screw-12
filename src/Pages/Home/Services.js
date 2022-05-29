import React from 'react';
import customer from '../../assets/icons/customer.png'
import revenue from '../../assets/icons/revenue.png';
import tools from '../../assets/icons/tools.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: '1000+ Customer',
            description: '',
            img: customer
        },
        {
            _id: 2,
            name: '150M+ Annual revenue',
            description: '',
            img: revenue
        },
        {
            _id: 3,
            name: '75+ Tools',
            description: '',
            img: tools
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Business Summary</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
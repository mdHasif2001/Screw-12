import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div>
            <h2 className='text-center text-xl text-primary font-bold m-5'>Tools</h2>
            <div className='row grid-cols-1 lg:grid-cols-3 grid gap-5'>
                {
                    services.map(myTool => <Tool
                    key={myTool._id}
                    myTool={myTool}
                    >
                    </Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;
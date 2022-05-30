import { useEffect, useState } from 'react';

const UsePurchase = serviceId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://stormy-plains-26756.herokuapp.com/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId]);

    return [service]
};

export default UsePurchase;
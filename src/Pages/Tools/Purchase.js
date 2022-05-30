import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';
import UsePurchase from './UsePurchase';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';


const Purchase = () => {
    const {serviceId} = useParams();
    const [service] = UsePurchase(serviceId);
    

    return (
        <div style={{
            background: '#94a3b8' }} className=' px-10 py-14 '>
          <div className='text-center pb-14 text-white'>
            <h1 className='text-4xl'>Please Put Some Information here.</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
            <input
              type='text'
              placeholder='Quantity'
              className='input w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Phone Number'
              className='input w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Address'
              className='input w-full max-w-md'
            />
            <Link to='/dashboard'>
            <PrimaryButton>Add To Cart</PrimaryButton>
            </Link>
          </div>
        </div>
        );
};

export default Purchase;
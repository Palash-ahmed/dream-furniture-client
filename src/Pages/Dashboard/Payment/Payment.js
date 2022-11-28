import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    console.log('orders data', order)
    return (
        <div>
            <h3 className="text-3xl">Payment</h3>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
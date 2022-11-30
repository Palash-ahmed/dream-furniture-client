import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const OrdersModal = ({ selectedProduct, setSelectedProduct }) => {
    const { title, resale_price, image_url, price } = selectedProduct;
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            buyerName: name,
            productName: title,
            email,
            price,
            phone,
            location,
            image_url,
            
            
        }
        fetch('https://dream-furniture-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setSelectedProduct(null);
                    toast.success('Order Confirmed')
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 mt-8'>
                        <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered w-full uppercase font-bold" />
                        <input name='email' type="text" disabled value={user?.email} className="input input-bordered w-full font-bold" />
                        <input name='title' type="text" disabled value={title} className="input input-bordered w-full font-bold" />
                        <input name='price' type="text" disabled value={resale_price} className="input input-bordered w-full font-bold" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-primary bg-gradient-to-r from-primary to-secondary text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrdersModal;
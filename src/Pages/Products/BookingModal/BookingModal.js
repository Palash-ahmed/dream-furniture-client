import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
    const { title, resale_price } = selectedProduct;
    const{user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            title,
            price,
            phone,
            location,
        }
        console.log(booking);
        setSelectedProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-8'>
                        <input name='name' type="text" value={user.displayName} className="input input-bordered w-full" />
                        <input name='email' type="text" disabled value={user?.email} className="input input-bordered w-full" />
                        <input name='title' type="text" disabled value={title} className="input input-bordered w-full" />
                        <input name='price' type="text" disabled value={resale_price} className="input input-bordered w-full" />
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

export default BookingModal;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrdersModal from '../Products/OrdersModal/OrdersModal';
import Products from '../Products/Products';

const Category = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 gap-12 my-12'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    ></Products>)
                }
            </div>
            {
                selectedProduct &&
                <OrdersModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></OrdersModal>
            }
        </div>
    );
};

export default Category;
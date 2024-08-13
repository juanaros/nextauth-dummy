"use client"

'use client';

import React, { useEffect, useState } from 'react';
interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
}

interface CartData {
    id: number;
    userId: number;
    products: Product[];
    total: number;
    discountedTotal: number;
}

function Dashboard() {
    const [cartData, setCartData] = useState<CartData | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/1')
            .then((res) => res.json())
            .then((data) => {
                setCartData(data);
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    if (!cartData) {
        return <div>Loading...</div>;
    }

    const { id, userId, products, total, discountedTotal } = cartData;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Dashboard</h1>
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Cart Summary</h2>
                <p><strong>Cart ID:</strong> {id}</p>
                <p><strong>User ID:</strong> {userId}</p>
                <p><strong>Total Price:</strong> ${total}</p>
                <p><strong>Discounted Total:</strong> ${discountedTotal}</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>Products</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Product</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Price</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quantity</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.title}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>${product.price}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.quantity}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>${product.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/Display.css"


const DisplayProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchStoredProducts();
    }, []);

    const fetchStoredProducts = async () => {
        try {
            const storedProducts = JSON.parse(localStorage.getItem('userProducts')) || [];

            
            const api = 'https://reqres.in/api/products'; 
            const { data } = await axios.post(api, { products: storedProducts });

            
            setProducts(data.products || storedProducts);
        } catch (err) {
            setError('Failed to fetch user-added products.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-list-container">
            <h1>Added Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : products.length ? (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td> {/* S.No */}
                                <td>{product.name}</td> {/* Header */}
                                <td>${product.price}</td> {/* Price */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products added yet.</p>
            )}
        </div>
    );
};

export default DisplayProduct;

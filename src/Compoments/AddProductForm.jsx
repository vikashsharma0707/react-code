

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/Add.css"; 

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [message, setMessage] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
    
        const storedProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
        setProducts(storedProducts);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (products.some(product => product.name.toLowerCase() === productName.toLowerCase())) {
            setMessage("This product already exists.");
            return;
        }

        try {
            
            const response = await axios.post("https://reqres.in/api/products", {
                name: productName,
                price: productPrice,
            });

            
            const newProduct = {
                id: Date.now(), 
                name: response.data.name,
                price: response.data.price,
            };

            const updatedProducts = [...products, newProduct];

            
            localStorage.setItem('userProducts', JSON.stringify(updatedProducts));
            setProducts(updatedProducts);

            setMessage(`Product added: ${newProduct.name} at $${newProduct.price}`);
        } catch (error) {
            setMessage("Failed to add product. Try again.");
        }

    
        setProductName('');
        setProductPrice('');
    };

    return (
        <div className="product-form-container">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit} className="add-product-form">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-button">Add Product</button>
            </form>
            {message && <p className="message">{message}</p>}
            <h2>Added Products</h2>
            <ul className="product-list">
                {products.length ? (
                    products.map(product => (
                        <li key={product.id} className="product-item">
                            {product.name} - ${product.price}
                        </li>
                    ))
                ) : (
                    <p>No products added yet.</p>
                )}
            </ul>
        </div>
    );
};

export default AddProductForm;

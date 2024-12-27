
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../CSS/Search.css"; 

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = () => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!productName || !productPrice) return;

        
        if (products.some(product => product.name === productName && product.id !== editingId)) {
            alert('Product already exists!');
            return;
        }

        
        const newProduct = { id: editingId || Date.now(), name: productName, price: parseFloat(productPrice) };

       
        const updatedProducts = editingId 
            ? products.map(product => (product.id === editingId ? newProduct : product)) 
            : [...products, newProduct];

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        
        loadProducts(); 
        resetForm();
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        loadProducts(); 
    };

    const handleEditProduct = (product) => {
        setEditingId(product.id);
        setProductName(product.name);
        setProductPrice(product.price);
    };

    const resetForm = () => {
        setEditingId(null);
        setProductName('');
        setProductPrice('');
    };

    return (
        <div className="home-container">
              <h4>Method 2: Using Simple JavaScript Functions</h4>
              <p>Functions for adding, displaying, and searching products.</p>
            <h1>Manage Products</h1>
            <form onSubmit={handleAddProduct} className="product-form">
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={productPrice} 
                    onChange={(e) => setProductPrice(e.target.value)} 
                    required 
                />
                <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>
            </form>

            <input 
                type="text" 
                placeholder="Search Products" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="search-bar"
            />

            <h2>Product List</h2>
            <ul className="product-list">
                {products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())).map(product => (
                    <li key={product.id} className="product-item">
                        <span>{product.name} - ${product.price}</span>
                        <button onClick={() => handleEditProduct(product)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
                {products.length === 0 && <p>No Product Found</p>}
            </ul>
        </div>
    );
};

export default ProductAll;


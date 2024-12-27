

import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        
        const products = JSON.parse(localStorage.getItem('userProducts')) || [];

       
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(filtered);
    };

    return (
        <div>
            <h1>Search Products</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {searchResults.length ? (
                <ul>
                    {searchResults.map(product => (
                        <li key={product.id}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default SearchBar;

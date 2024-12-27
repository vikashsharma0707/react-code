

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../AddTaskSlice";
import "../CSS/ReduxAdd.css"; // Ensure to import the CSS

const ReduxAdd = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [editId, setEditId] = useState(null);
  const [isAdding, setIsAdding] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateInputs = () => {
    if (!productName.trim() || !productPrice.trim()) {
      alert("Product name and price cannot be empty!");
      return false;
    }
    if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
      message.error("Price must be a valid number greater than 0!");
      return false;
    }
    return true;
  };

  const handleProduct = () => {
    if (!validateInputs()) return;

    if (isAdding) {
      dispatch(addProduct({ id: Date.now(), name: productName.trim(), price: parseFloat(productPrice) }));
    } else {
      dispatch(editProduct({ id: editId, name: productName.trim(), price: parseFloat(productPrice) }));
    }

    setProductName("");
    setProductPrice("");
    setIsAdding(true);
    setEditId(null);
  };

  return (
    <div className="product-container">
      <h4>Method 3: Using Redux Toolkit</h4>
      <p>Functions for adding, displaying, and searching products.</p>
      <div className="product-input">
        <input
          className="input-field"
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Enter product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button className="btn-submit" onClick={handleProduct}>
          {isAdding ? "Add Product" : "Save Product"}
        </button>
      </div>

      <div className="search-input">
        <input
          className="input-field"
          type="text"
          placeholder="Search product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <hr />

      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn-delete" onClick={() => dispatch(deleteProduct(product.id))}>
                    Delete
                  </button>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      setProductName(product.name);
                      setProductPrice(product.price.toString());
                      setEditId(product.id);
                      setIsAdding(false);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4">No products found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReduxAdd;

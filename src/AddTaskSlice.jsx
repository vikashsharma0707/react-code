

import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [],
};

const AddTaskSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exists = state.products.some(
        (product) => product.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (!exists) {
        state.products.push(action.payload);
        localStorage.setItem('products', JSON.stringify(state.products));
        message.success("Product added successfully!");
      } else {
        message.error("Product with the same name already exists!");
      }
    },


    addPrice: (state, action) => {
      const increment = action.payload; 
      state.products.forEach((product) => {
        if (product.price) {
          product.price += increment;
        }
      });
      localStorage.setItem('products', JSON.stringify(state.products)); 
      message.success("Prices updated successfully!");
    },


    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products)); 
      message.success("Product deleted successfully!");
    },

    
    editProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.name = action.payload.name;
        product.price = action.payload.price;
        localStorage.setItem('products', JSON.stringify(state.products)); 
        message.success("Product updated successfully!");
      } else {
        message.error("Product not found for editing!");
      }
    },
  },
});

export const { addProduct, addPrice, deleteProduct, editProduct } =
  AddTaskSlice.actions;
export default AddTaskSlice.reducer;

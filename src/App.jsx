import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import AddProductForm from './Compoments/AddProductForm';
import SearchBar from './Compoments/SearchBar';
import DisplayProduct from './Compoments/DisplayProduct';
import Logout from './Pages/Logout';
import ReduxAdd from './Compoments/ReduxAdd';
import ProductAll from './Compoments/ProductAll';
// import Footer from './Pages/Footer';


const App=()=>{
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route  path="/"  element={<Login/>}>
        <Route path="login" element={<Login/>}/>
       
        </Route>
        
        </Routes>

        <Routes>
          <Route path="layout"  element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="addproduct" element={<AddProductForm/>}/>
          <Route path="search" element={<SearchBar/>}/>
          <Route path="display" element={<DisplayProduct/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="reduxadd" element={<ReduxAdd/>}/>
          <Route path="productall" element={<ProductAll/>}/>
          {/* <React path="footer" element={<Footer/>}/> */}
          


          </Route>
        
      </Routes>
      </BrowserRouter>


      </>
  );

}


export default App;


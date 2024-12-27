

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { MdOutlineMenu } from 'react-icons/md'; 
import "./CSS/Layout.css"; 
import Footer from "./Pages/Footer";

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">MyApp</div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <MdOutlineMenu size="30px" color="black" />
                </div>
                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="home" onClick={toggleMenu}>Home</Link>
                    <Link to="productall" onClick={toggleMenu}>ProductAll</Link>
                    <Link to="addproduct" onClick={toggleMenu}>AddProductForm</Link>
                    <Link to="search" onClick={toggleMenu}>SearchBar</Link>
                    <Link to="display" onClick={toggleMenu}>DisplayProduct</Link>
                    <Link to="reduxadd" onClick={toggleMenu}>ReduxAdd</Link>
                    <Link to="logout" onClick={toggleMenu}>Logout</Link>
                    
                </nav>
            </div>
            <Outlet />

            <Footer/>

        </div>
    );
};

export default Layout;

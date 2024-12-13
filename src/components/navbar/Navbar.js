import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/images/edit.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <a href="index.html" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo"/>
        </a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/abt" className="nav-link" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mnu" className="nav-link" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/glry" className="nav-link" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cnt" className="nav-link" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Order</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cnt" className="nav-link" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "#ffb600" : "",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Contact</NavLink>
                    </li>
                </ul>
                <NavLink to="/lg" className="btn ss-btn ">Login</NavLink>
            </div>
        </div>
    </div>
    </nav>

    // <nav className="navbar navbar-expand-md navbar-light bg-color">
    //   <p className="logo text-primary">
    //     <i>
    //       <img src={logo} alt="Logo" className="logo-icon" />
    //     </i>
    //     BooK<span className="text-danger">WorLd</span>
    //   </p>
    //   <button
    //     type="button"
    //     className="navbar-toggler ml-auto mb-3 custom-toggler"
    //     data-toggle="collapse"
    //     data-target="#navbarCollapse"
    //   >
    //     <span className="navbar-toggler-icon text-danger"></span>
    //   </button>

    //   <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
    //     <div className="navbar-nav">
    //       <NavLink
    //         to="/"
    //         className="nav-item nav-link"
    //         style={({ isActive, isPending }) => ({
    //           color: isActive ? "red" : "black",
    //           fontWeight: isPending ? "bold" : "normal",
    //         })}
    //       >
    //         HOME
    //       </NavLink>
    //       <NavLink
    //         to="/about"
    //         className="nav-item nav-link"
    //         style={({ isActive, isPending }) => ({
    //           color: isActive ? "red" : "black",
    //           fontWeight: isPending ? "bold" : "normal",
    //         })}
    //       >
    //         ABOUT
    //       </NavLink>
    //       <NavLink
    //         to="/books"
    //         className="nav-item nav-link"
    //         style={({ isActive, isPending }) => ({
    //           color: isActive ? "red" : "black",
    //           fontWeight: isPending ? "bold" : "normal",
    //         })}
    //       >
    //         BOOKS
    //       </NavLink>
    //       <NavLink
    //         to="/login"
    //         className="nav-item nav-link"
    //         style={({ isActive, isPending }) => ({
    //           color: isActive ? "red" : "black",
    //           fontWeight: isPending ? "bold" : "normal",
    //         })}
    //       >
    //         LOGIN
    //       </NavLink>
    //       <NavLink
    //         to="/signup"
    //         className="nav-item nav-link"
    //         style={({ isActive, isPending }) => ({
    //           color: isActive ? "red" : "black",
    //           fontWeight: isPending ? "bold" : "normal",
    //         })}
    //       >
    //         SIGNUP
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

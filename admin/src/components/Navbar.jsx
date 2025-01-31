import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                        <Link className="navbar-brand text-white fw-bold" to="/">
                              <span className="logo-icon">🍔</span> Swigatto
                            </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Add Item
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listitems" className="nav-link">
                                    List Item
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

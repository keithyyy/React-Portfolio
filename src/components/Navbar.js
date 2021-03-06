import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "bootstrap/js/src/collapse"

const Navbar = () => {

    const location = useLocation();

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light">
                <a className="navbar-brand" href="/#">Keith Crooc</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarToggler">
                    
                    <ul className="navbar-nav mt-2 ml-auto mt-lg-0">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>

            
        
        
        
        
        
        
        
        
        </div>
    )
}

export default Navbar

import React from 'react'
import "bootstrap/js/src/collapse"

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light">
                <a className="navbar-brand" href="/#">Keith Crooc</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarToggler">
                    
                    <ul className="navbar-nav mt-2 ml-auto mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>

            
        
        
        
        
        
        
        
        
        </div>
    )
}

export default Navbar

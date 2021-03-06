import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare,  faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        
        <footer className="footer">

            <nav className="navbar navbar-default navbar-custom">
                
                <div className="container-fluid">

                    <div className="text-center center-block">
                        <a href="" className="github-icon">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                        <a href="" className="twitter-icon">
                            <FontAwesomeIcon icon={faTwitterSquare}/>
                        </a>
                        <a href="" className="linkedin-icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                </div>

            </nav>

        </footer>
            
        
    )
}

export default Footer

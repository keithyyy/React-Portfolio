import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare,  faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        
        <footer className="footer">

            
                
                <div className="container">

                    <div className="text-center center-block">
                        <a href="https://github.com/keithyyy" className="icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                        <a href="https://twitter.com/codenamekeith" className="icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare}/>
                        </a>
                        <a href="https://linkedin.com/in/keith-crooc" className="icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                </div>

            

        </footer>
            
        
    )
}

export default Footer

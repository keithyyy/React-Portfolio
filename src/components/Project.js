import React from 'react'

const Project = (props) => {
    return (
        <div className="card">
                <div className="card-title">
                    {props.name}
                </div>
                <hr/>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <img className="screenshot" alt={props.name + 'screenshot'} src={props.image} />
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="description">{props.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                        <a id="Github" href={props.github} className="btn btn-info mx-3" role="button" target="_blank">Github</a>
                        <a id="Website" href={props.website} className="btn btn-info mx-3" role="button" target="_blank">Website</a>
                        </div> 
                        
        
                    </div>
                    
                    
                </div>   
                
            </div>
    )
}

export default Project

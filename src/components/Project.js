import React from 'react'

const Project = (props) => {
    return (
        <div className="card">
                <div className="card-title">
                    {props.name}
                </div>
                <hr/>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <img alt={props.name + 'screenshot'} src={props.image} style={{width: "100%", display: "flex", justifyContent: "center"}}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="description">{props.description}</p>
                        </div>
                    </div>
                    <div className="row"> 
                        <a href={props.github} className="btn btn-info" role="button" target="_blank">Github</a>
                    
                        <a href={props.website} className="btn btn-info" role="button" target="_blank">Website</a>
        
                    </div>
                    
                    
                </div>   
                
            </div>
    )
}

export default Project

import React from 'react'
import Header from "../../components/Header"
import Project from '../../components/Project'
import ProjectCollection from '../../assets/projects.json'





const Projects = () => {
       
    return (
        <div>
            <Header title="Projects"/>


            {ProjectCollection.map((project) => (
                <div className="projectCard" key={project.id}>
                    <Project 
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    github={project.github}
                    website={project.website}
                />
                </div>
                    
            ))}
                
        </div>
    )
}

export default Projects

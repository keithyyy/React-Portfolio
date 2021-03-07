import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Project from '../../components/Project'
import ProjectCollection from '../../assets/projects.json'
import './projects.css'




const Projects = () => {
       
    return (
        <div>

            <hr/>

            <Header title="Projects"/>

            <hr/>
            
            {ProjectCollection.map((project) => (
                <div className="projectCard text-center" key={project.id}>
                    <Project 
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    github={project.github}
                    website={project.website}
                />
                </div>
                    
            ))}

            <Footer />
                
        </div>
    )
}

export default Projects

import React from 'react';
import Header from '../../components/Header';
import profilepic from "../../assets/HeadshotSQ.jpg"
import './home.css'


const Home = () => {

    

    return (
        <div>
            <Header title="About Me"/>

            <div className="row">
                <div className="col-md-6">
                    
                    <img src={profilepic} className="profilepic" id="profilepic"></img>

                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Hey there! 👋</p>
                            <p className="card-text">I'm Keith Crooc. </p>
                            <p className="card-text">I currently juggle a few hats as I enjoy planning and executing a variety of projects. I work as a Growth Specialist for a start-up in the job advertising space while simultaneosly aspiring to be a web developer.</p>
                            <p className="card-text">Earned a Bachelor of Commerce, majoring in Digital Business Management from Humber College. I had the opportunity to polish my marketing and user experience skills, which I also plan to highlight in my path as a web developer. I am currently attending the Full-Stack Bootcamp at the University of Toronto to bring me up to speed.</p>
                            
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home

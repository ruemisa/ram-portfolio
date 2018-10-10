import React, { Component } from 'react';

import Rubicks from '../../videos/rubicks.mp4';
import BakeShack from '../../videos/bakeshack.mp4';
import PaperPlanes from '../../videos/paper-planes.mp4';

import ProjectBox from './ProjectBox/ProjectBox';
import styles from './Projects.module.css';
class Projects extends Component {
    render() {
        return (
            <div className={ styles.Projects }>
                <ProjectBox link={ Rubicks }>
                    <h2>Rubicks Academy</h2>
                    <p>A Full-stack application designed for a school's administrator. Design was inspired by one of my favorite fictional game characters. </p>
                            
                    <h3>Technologies Used:</h3>
                    <ul>
                        <li>Ruby on Rails</li>
                        <li>CSS3</li>
                        <li>PostgreSQL</li>
                        <li>Sentry-raven gem</li>
                    </ul>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://github.com/ruemisa/rubicks-panel">Github</a></li>
                        <li><a href="https://rubicks-academy.herokuapp.com/">Heroku</a></li>
                    </ul>
                </ProjectBox>
                <ProjectBox link={ BakeShack }>
                    <h2>Bake Shack</h2>
                    <p>A Full-stack application designed for a local neighborhood bakery. Inspiration for the design came after watching Blur's Coffee and TV.</p>

                    <h3>Technologies Used:</h3>
                    <ul>
                        <li>Sinatra Framework</li>
                        <li>Ruby</li>
                        <li>CSS</li>
                        <li>PostgreSQL</li>
                        <li>Eventbrite API</li>
                    </ul>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://github.com/ruemisa/bakeshack">Github</a></li>
                    </ul>
                </ProjectBox>
                <ProjectBox link={ PaperPlanes }>           
                    <h2>Paper Planes</h2>   
                    <p>A Single Page Front-end application designed for an environment-friendly paper company, hence the overall design of the page.</p>

                    <h3>Technologies Used:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML</li>
                    </ul>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://github.com/ruemisa/munderdifflin">Github</a></li>
                    </ul>                
                </ProjectBox>
            </div>
        );
    }
}

export default Projects;


// TODO: Turn description into components 

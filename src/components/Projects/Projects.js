import React, { Component } from 'react';

import Rubicks from '../../videos/rubicks.mp4';
import BakeShack from '../../videos/bakeshack.mp4';
import PaperPlanes from '../../videos/paper-planes.mp4';

import ProjectBox from './ProjectBox/ProjectBox';
class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectBox link={ Rubicks }>
                    <h2>Rubicks Academy</h2>
                    <p>A Full-stack application designed for a school's administrator. It was built using Ruby on Rails framework, which also encompasses most of its functionality. CSS grid was used to dictate the overall layout of the web application.</p>
                    <ul>
                        <li><a href="https://github.com/ruemisa/rubicks-panel">Github</a></li>
                        <li><a href="https://rubicks-academy.herokuapp.com/">Heroku</a></li>
                    </ul>
                </ProjectBox>
                <ProjectBox link={ BakeShack }>
                    <h2>Project Name</h2>
                    <p>Project Desc</p>
                    <ul>
                        <li><a href="">Github</a></li>
                    </ul>
                </ProjectBox>
                <ProjectBox link={ PaperPlanes }>           
                    <h2>Project Name</h2>   
                    <p>Project Desc</p>
                    <ul>
                        <li><a href="">Github</a></li>
                    </ul>                
                </ProjectBox>
            </div>
        );
    }
}

export default Projects;
import React, { Component } from 'react';

// Components 
import Details from '../../components/ProjectBox/Details/Details';
import Gallery from '../../components/ProjectBox/Gallery/Gallery';

// Styling
import styles from './Projects.module.css';

class Projects extends Component {
    constructor() {
        super();

        this.state = {
            projects: [
                {   
                    id: 0,
                    title: 'Project 1',
                    description: 'Project this that',
                },
                {   
                    id: 1,
                    title: 'Project 2',
                    description: 'Project this that',
                },
                {   
                    id: 2,
                    title: 'Project 3',
                    description: 'Project this that',
                },

            ],
            currentIndex: 0,
            selectedProject: null
        };
    };
    



    render() {

        return (
            <div className={ styles.Projects } id="projects">
                <h2 className={ styles.GridTitle }>My Work</h2>
                <div className={ styles.ProjectGrid }>
                    <Details />
                    <Gallery />
                </div>
            </div>
        );
    }
};

export default Projects;

// add background-attachment: fixed; if you want that parallax
import React, { Component } from 'react';

// Components 
import Details from '../../components/ProjectBox/Details/Details';
import Gallery from '../../components/ProjectBox/Gallery/Gallery';

// Videos & Images 
import Rubicks from '../../videos/rubicks.mp4';
import BakeShack from '../../videos/bakeshack.mp4';
import PaperPlanes from '../../videos/paper-planes.mp4';

// Styling
import styles from './Projects.module.css';

class Projects extends Component {
    constructor() {
        super();

        this.state = {
            projects: [
                {   
                    id: 1,
                    title: 'Rubicks Academy',
                    description: 'A Full-Stack web application of an administrator panel of a school. Demo login and password: rubick@admin.com, 111111',
                    technologies: 'Ruby on Rails + CSS + PostgreSQL',
                    video: Rubicks,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/rubicks-panel"
                        },
                        {   name: 'Heroku',
                            url: "https://rubicks-academy.herokuapp.com/"
                        }
                    ]
                },
                {   
                    id: 2,
                    title: 'Bake Shack',
                    description: 'A Full-stack application designed for a local neighborhood bakery',
                    technologies: 'Sinatra + Ruby + CSS + PostgreSQL',
                    video: BakeShack,
                    links: [
                        { 
                            name: 'Github',
                            url: "https://github.com/ruemisa/bakeshack"
                        }
                    ]
                },
                {   
                    id: 3,
                    title: 'Paper Planes',
                    description: 'A Single Page Front-end application designed for an environment-friendly paper company.',
                    technologies: 'JavaScript + CSS + HTML',
                    video: PaperPlanes,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/munderdifflin"
                        }
                    ]
                },

            ],
            currentIndex: 0
        };
    };
    
    goToNextProject = (e) => {
        e.preventDefault();

        let index = this.state.currentIndex;
        let projects = this.state.projects;
        let length = projects.length - 1;

        if (index === length) {
            index = -1;
        }

        ++index;

        this.setState( {
            currentIndex: index
        })
        
    }

    goToPrevProject = (e) => {
        e.preventDefault();

        let index = this.state.currentIndex;
        let projects = this.state.projects;
        let length = projects.length;

        if (index < 1) {
            index = length;
        }

        --index;
        
        this.setState( {
            currentIndex: index
        })
    }


    render() {

        const selectedProject = this.state.projects[this.state.currentIndex];

        return (
            <div className={ styles.Projects } id="projects">
                <h2 className={ styles.GridTitle }>My Work</h2>
                <div className={ styles.ProjectGrid }>
                    <Details data={ selectedProject }/>
                    <Gallery 
                        data={ selectedProject }
                        onNext={ e => this.goToNextProject(e) }
                        onPrev={ e => this.goToPrevProject(e) } />
                </div>
            </div>
        );
    }
};

export default Projects;

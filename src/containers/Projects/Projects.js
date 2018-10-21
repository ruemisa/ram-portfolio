import React, { Component } from 'react';

// Components 
import Details from '../../components/ProjectBox/Details/Details';
import Gallery from '../../components/ProjectBox/Gallery/Gallery';

// Videos & Images 
import Rubicks from '../../videos/rubicks.mp4';
import BakeShack from '../../videos/bakeshack.mp4';
import PaperPlanes from '../../videos/paper-planes.mp4';
import Conquest from '../../videos/conquest.mp4';
import Pokedex from '../../videos/pokedex.mp4';
import Avatar from '../../videos/avatar.mp4';

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
                    description: "A Full-Stack Web Dashboard designed to act as a way for administrators to oversee the academy's operations. Demo login and password: rubick@admin.com, 111111",
                    technologies: 'Ruby on Rails + CSS + PostgreSQL + Heroku',
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
                    description: "A Full-stack application designed for a local neighborhood bakery that sold cakes, muffins, and cookies as their highlighted products. The user interface was heavily inspired by Blur's Coffee & TV music video.",
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
                    description: 'A Single Page Front-end application designed for an environment-friendly paper company. It is designed using CSS Grid for the layout. CSS animations were also integrated to provide a more dynamic User Interface.',
                    technologies: 'JavaScript + CSS + HTML',
                    video: PaperPlanes,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/munderdifflin"
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Conquest',
                    description: 'A Full-stack application designed for users who love to explore urban areas. Built a RESTful API through Ruby on Rails and  designed the User Interface through React. It is also designed using a mobile-first approach. The project is ongoing, meaning features are being added constantly. Demo login ( username: keltoh, password: 111111 ).',
                    technologies: 'React + Rails + Google Maps API + CSS + PostgreSQL + Heroku',
                    video: Conquest, 
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/conquest-app"
                        },
                        {
                            name: 'Heroku',
                            url: "https://conquest-poi-app.herokuapp.com/"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Strewbs' Pokedex",
                    description: 'A Single-Page Web application that provides useful information for three pokemon by making HTTP requests to the Pokemon RESTful API. Materialize CSS was integrated for the layout. The CSS was also written using SASS.',
                    technologies: 'SASS + HTML + JavaScript + Materialize CSS + Pokemon API',
                    video: Pokedex,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/personal_pokedex"
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Avatar",
                    description: 'A Full-stack web application designed as a social media platform for fans of the TV show: Avatar, the Last Airbender. It allows users to share images and thoughts through two types of communities: a global community and a community based on their allegiances. Demo logins: (user: nomad@gmail.com, password: 111111), (user: azula@email.com, password: 111111)',
                    technologies: 'Sinatra + Ruby + CSS + PostgreSQL + Heroku',
                    video: Avatar,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/rumblr"
                        },
                        {
                            name: 'Heroku',
                            url: "https://rumblr-ruel.herokuapp.com/"
                        }
                    ]

                }

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

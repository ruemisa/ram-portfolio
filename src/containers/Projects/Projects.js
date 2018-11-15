import React, { Component } from 'react';

// Components 
import Details from '../../components/ProjectBox/Details/Details';
import Gallery from '../../components/ProjectBox/Gallery/Gallery';

// Videos & Images 
import Rubicks from '../../videos/rubicks.mp4';
import Conquest from '../../videos/conquest.mp4';
import Salon from '../../videos/salon.mp4';
import Barter from '../../videos/barter-post.mp4';
import Building from '../../videos/building-scout.mp4';

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
                    technologies: 'Ruby on Rails + CSS3 + PostgreSQL + Heroku',
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
                    title: 'Conquest',
                    description: 'A Full-stack application designed for users who love to explore urban areas. Built a RESTful API through Ruby on Rails and  designed the User Interface through React. It is also designed using a mobile-first approach. The project is ongoing, meaning features are being added constantly. Demo login ( username: keltoh, password: 111111 ).',
                    technologies: 'React + Rails + Google Maps API + CSS3 + PostgreSQL + Heroku',
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
                    id: 3,
                    title: "Home Salon",
                    description: 'A landing page layout of a company that provides hairstyling services at home. This project follows the BEM methodology and is responsive across multiple devices. Customized npm scripts were also created to build the final compiled css file.',
                    technologies: 'SASS + HTML5 + CSS3',
                    video: Salon,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/home-salon"
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Barter Trading Post",
                    description: 'A user dashboard interface design of a barter trading auction house platform. This project uses Flexbox for the overall layout of the dashboard. It is responsive across multiple devices. Custom npm scripts were also created for building the compiled css file.',
                    technologies: 'SASS + HTML5 + CSS3',
                    video: Barter,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/barter-post"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Building Scout",
                    description: 'A landing page layout of a company that provides tenant reviews about an apartment building. This project utilizes some basic css animation, and jQuery. It is responsive across multiple devices.',
                    technologies: 'jQuery + CSS3 + HTML5',
                    video: Building,
                    links: [
                        {
                            name: 'Github',
                            url: "https://github.com/ruemisa/building-scout"
                        },
                        {
                            name: 'Github Pages',
                            url: "https://ruemisa.github.io/building-scout/"
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

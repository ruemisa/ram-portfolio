import React from 'react';

// Videos and Images 
import ProfilePic from '../../../images/profile.png';

// Styling
import styles from './Bio.module.css';

const bio = () => {
    return (
        <section className={ styles.Bio }>
            <img className={ styles.ProfilePic } src={ ProfilePic } alt="profile_pic" />
            <div className={ styles.Skills }>
                <h3>Skills</h3>
                <p>Programming Languages</p>
                <ul>
                    <li>JavaScript</li>
                    <li>Ruby</li>    
                </ul> 
                <p>Frameworks/Libraries</p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Rails</li>
                    <li>Bootstrap</li>
                </ul>
                <p>Markup/Design</p>
                <ul>
                    <li>Sass</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                </ul>
                <p>Other Technical Skills</p>
                <ul>
                    <li>PostgreSQL</li>
                    <li>Git</li>
                    <li>Responsive Design</li>
                    <li>BEM methodology</li>
                </ul>
            </div>
            <div className={ styles.ResumeLink }>
                <a href="https://drive.google.com/file/d/17f-bw-VvV5s9fYfZmsOpWe7mzMJ1nI48/view?usp=sharing" target="_blank">Link to my Resume</a>
            </div>
        </section>
    );
}

export default bio;
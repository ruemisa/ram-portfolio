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
                <p>
                    Proficient: 
                    <br></br><br></br>
                    JavaScript + React + Redux + jQuery + CSS3 + Sass + HTML5 + Ruby + Rails + PostgreSQL + SQL + Bootstrap + Git + REST API + Responsive Design + BEM Methodology + Version Control
                </p>
                <p>
                    Familiar: 
                    <br></br><br></br>
                    Node.js + Express.js + GraphQL + MongoDB + Java + Python + NoSQL + MySQL
                </p>
            </div>
            <div className={ styles.ResumeLink }>
                <a href="https://drive.google.com/file/d/1nvOMPD_jVjVxocM5V-ZkJ-MYkPpYa9xm/view?usp=sharing" target="_blank">Link to my Resume</a>
            </div>
        </section>
    );
}

export default bio;
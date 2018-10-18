import React from 'react';

// Videos and Images 
import ProfilePic from '../../../images/profile.jpg';

// Styling
import styles from './Bio.module.css';

const bio = () => {
    return (
        <section className={ styles.Bio }>
            <img className={ styles.ProfilePic } src={ ProfilePic } alt="profile_pic" />
            <div className={ styles.Skills }>
                <h3>Skills</h3>
                <p>JavaScript + React + Redux + Ruby + Ruby on Rails + CSS + HTML + Responsive Design</p>
            </div>
            <div className={ styles.ResumeLink }>
                <a href="https://drive.google.com/file/d/1E9A7pBX7cIfVzQIyf3cp1-T6bEsKm5lx/view?usp=sharing">Link to my Resume</a>
            </div>
        </section>
    );
}

export default bio;
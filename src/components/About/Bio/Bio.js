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
                <p>JavaScript + React + Redux + Ruby + Ruby on Rails + CSS + HTML + Responsive Design</p>
            </div>
            <div className={ styles.ResumeLink }>
                <a href="https://drive.google.com/file/d/1rTSWSyA_gK10n7O_TVkVKiVaXIGBNVU1/view?usp=sharing" target="_blank">Link to my Resume</a>
            </div>
        </section>
    );
}

export default bio;
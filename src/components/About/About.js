import React from 'react';

// Components 
import Bio from './Bio/Bio';
import Intro from './Intro/Intro';
import Contact from './Contact/Contact';

// Styling 
import styles from './About.module.css';

const about = () => {
    return (
        <div className={ styles.About }>
            <div className={ styles.SectionIntro }>
                <h2 id="about">Meet the Creator</h2>
            </div>
            <div className={ styles.ProfileDetails }>
                <Bio />
                <Intro />
            </div>
            <Contact />
        </div>
    );
}

export default about;
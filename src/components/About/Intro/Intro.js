import React from 'react';

// Styling
import styles from './Intro.module.css';

const intro = () => {
    return (
        <section className={ styles.Intro }>
            <div className={ styles.Title }>
                <h2> Ruel Alfonso Misa </h2>
                <p>Front-end Web Developer</p>
                <div className={ styles.Line }>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={ styles.IntroSection }>
                <p>Hello. I am Ruel, a Front-end Web Developer based in Brooklyn, New York.</p>
                <p>I consider myself a student of the craft. I keep myself updated with current trends. I dedicate at least an hour of my spare time to study a new language or master my current set of skills.</p>
                <p>I can also do Back-end using Ruby and Ruby on Rails. However, I want to concentrate on improving my Front-end skills first.</p>
            </div>
        </section>
    );
}

export default intro;
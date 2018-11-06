import React from 'react';

// Styling
import styles from './Intro.module.css';

const intro = () => {
    return (
        <section className={ styles.Intro }>
            <div className={ styles.Title }>
                <h2> Ruel Alfonso Misa </h2>
                <p>Front-end Developer</p>
            </div>

            <div className={ styles.IntroSection }>
                <p>Hello. I am Ruel, a Front-end Developer based in Brooklyn, New York. I love building applications and tend to gather inspiration based on the experiences of friends and relatives.</p>
                <p>I used to provide a different kind of user experience by working as a Chef. Actually, we provided memories. I guess the same could be said with Web Developers. Basically, we provide the best possible experience for our audiences by making things accessbile, understandable, and more entertaining.</p>
                <p>I consider myself a student of the craft. I keep myself updated with current trends. I dedicate at least an hour a day to study a new language or master my current set of skills by building small web applications and work on improving my current projects.</p>
                <p>I am also capable of doing Back-end development using Ruby and Ruby on Rails. I am also currently learning Python since after mastering Front-end development, I would love to transition towards Back-end development. My end goal is to become a Full-stack developer.</p>
            </div>
        </section>
    );
}

export default intro;
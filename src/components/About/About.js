import React, { Component } from 'react';

import ProfilePic from '../../images/profile.jpg';
import styles from './About.module.css';
class About extends Component {
    render() {
        return (
            <div className={ styles.About }>
                <div className={ styles.Intro }>
                    <h2>Who is <span className={ styles.Emphasis }>R A M?</span></h2>
                    <img src={ProfilePic} alt="profile"/>
                    <p>"And no, it is not Random Access Memory."</p>
                </div>
            
                <section className={ styles.Section__One }>
                    <p>I am Ruel Alfonso Misa. Hence, RAM. I am a Front-End Developer that is based in New York City. I always had a passion for building things and learning new techniques. So my transition from the culinary industry to tech wasn't difficult. There are numerous similarities such as learning new skills on the fly and delivering great quality work. </p>
                </section>

            
                <section className={ styles.Section__Two }>
                    <p>I never really get tired of learning new things of interest. Web development just keeps me interested as it constantly evolves. Hence, it pushes me to evolve to a better version of myself each day. I know, I have so much on my plate right now. Maybe, I am just a glutton for learning. That ain't bad, right?  </p>
                    <h4 className={ styles.Emphasis }>"Call me a glutton for knowledge, I don't mind. As long as I can create with that knowledge! Creation is my PASSION!"</h4>
                </section>

                
                <section className={ styles.Section__Three }>
                    <p>It was definitely not all sunshine for me when I moved here. It was tough being independent from my family and leaving my sweet dog behind. I miss the Philippines to be honest. However, my life is here now. I am married to a very loving and supportive wife. My goal right now is to build on the skills that I currently possess in order to add more color to this world we live in. </p>
                </section>

                <div className={ styles.Skills }>
                    <h3> Skills </h3>
                    <p> JavaScript, CSS, HTML, React, Redux, Ruby, Ruby on Rails </p>
                    <a href="https://docs.google.com/document/d/1SxLxFAfMYX6f-dWBKmFSwFUtqd3FAzveC2e-SQS-8eQ/edit#heading=h.30j0zll">My Resume</a>
                </div>
            </div>
        );
    }
}

export default About;
import React from 'react';

// Coponents 
import Video from './Video/Video';

// Styling 
import styles from './Gallery.module.css';

const gallery = ( props ) => {
    return (
        <div className={ styles.Gallery }>
            <Video link={ props.data.video }/>
            <nav className={ styles.CarouselNav }>
                <a href="#projects" onClick={ props.onNext }><i className="fas fa-arrow-circle-up"></i></a>
                <a href="#projects" onClick={ props.onPrev }><i className="fas fa-arrow-circle-down"></i></a>
            </nav>
        </div>
    );
}

export default gallery;
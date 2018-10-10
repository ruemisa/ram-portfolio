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
                <a href="#" onClick={ props.onNext }><i className="fas fa-arrow-circle-up"></i></a>
                <a href="#" onClick={ props.onPrev }><i className="fas fa-arrow-circle-down"></i></a>
            </nav>
        </div>
    );
}

export default gallery;
import React from 'react';

// Styling 
import styles from './Gallery.module.css';

const gallery = ( props ) => {
    return (
        <div className={ styles.Gallery }>
            <div className={ styles.Selected }>Selected Image or Video</div>
            <nav className={ styles.CarouselNav }>
                <a href="#"><i class="fas fa-arrow-circle-up"></i></a>
                <a href="#"><i class="fas fa-arrow-circle-down"></i></a>
            </nav>
        </div>
    );
}

export default gallery;
import React from 'react';

import VideoBox from './VideoBox/VideoBox';
import styles from './ProjectBox.module.css';

const projectBox = (props) => {

    return (
        <div className={ styles.ProjectBox }>
            <VideoBox link={ props.link }/>
            <div className={ styles.ProjectDesc }>
                { props.children }
            </div>
        </div>
    );

}

export default projectBox;
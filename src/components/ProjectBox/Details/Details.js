import React from 'react';

// Styling
import styles from './Details.module.css';

const details = ( props ) => {
    
    return (
        <div className={ styles.Details }>
            <h2 className={ styles.ProjectName }>{ props.title }</h2>
            <p className={ styles.Technologies }>{ props.technologies }</p>
            <p className={ styles.Description }>{ props.description }</p>
            <div className={ styles.ProjectLinks }>
                { props.links }
            </div>
        </div>
    );
}

export default details;
import React from 'react';

// Styling
import styles from './Details.module.css';

const details = ( props ) => {
    
    const dataLink = props.data.links.map( ( link, index ) => {
        return (
            <a href={ link.url } target="_blank" key={ index } >
                { link.name }
            </a>
        );
    });

    return (
        <div className={ styles.Details }>
            <h2 className={ styles.ProjectName }>{ props.data.title }</h2>
            <p className={ styles.Technologies }>{ props.data.technologies }</p>
            <p className={ styles.Description }>{ props.data.description }</p>
            <div className={ styles.ProjectLinks }>
                { dataLink }
            </div>
        </div>
    );
}

export default details;
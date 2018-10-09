import React from 'react';

import styles from './Logo.module.css';

const logo = (props) => {
    return (
        <React.Fragment>
            <h1 className={ styles.Logo }>RAM</h1>
            <div className={ styles.LineOne }></div>
            <div className={ styles.LineTwo }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </React.Fragment>
    );
}

export default logo;
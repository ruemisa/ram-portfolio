import React, { Component } from 'react';

import styles from './Landing.module.css';

class Landing extends Component {
    render() {
        return (
            <div className={ styles.Landing }>
                <div className={ styles.Hero }>
                    <div className={ styles.Catchphrase }>
                        <h2>Hello. This is RAM.</h2>
                        <p>Front-End Developer. Writer. Storyteller.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
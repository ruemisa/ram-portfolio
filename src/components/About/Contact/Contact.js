import React from 'react';

// Styling
import styles from './Contact.module.css';

const contact = () => {
    return(
        <section id="contact" className={ styles.Contact }>
            <h3> Ready to Connect? </h3>
            <p><i className="fas fa-envelope"></i> ruel.g.misa@gmail.com</p>
            <p><i className="fas fa-mobile-alt"></i> +1 917.724.6759</p>
        </section>
    );
}

export default contact;
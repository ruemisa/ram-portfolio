import React from 'react';

// Styling
import styles from './Contact.module.css';

const contact = () => {
    return(
        <section id="contact" className={ styles.Contact }>
            <h3> Ready to Connect? </h3>
            <p><i class="fas fa-envelope"></i> ruel.g.misa@gmail.com</p>
        </section>
    );
}

export default contact;
import React from 'react';

import styles from './Footer.module.css';

const footer = () => {
    return (
        <div className={ styles.Footer }>

            <div className={ styles.Contact }>
                <p><i class="fas fa-mobile-alt"></i> +1 917.724.6759</p>
                <p><i class="fas fa-envelope"></i> ruel.g.misa@gmail.com</p>
            </div>

            <nav className={ styles.SocialNav }>
                <ul>
                    <li><a href="https://www.linkedin.com/in/ruemisa/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/ruemisa" target="_blank"><i class="fab fa-github-alt"></i></a></li>
                    <li><a href="https://www.instagram.com/ruewoulddo/" target="_blank"><i class="fas fa-camera-retro"></i></a></li>
                </ul>
            </nav>

            <div className={ styles.Copyright }>
              <p>Ruel Alfonso Misa | &copy; 2018</p>
            </div>

        </div>
    );
}

export default footer;
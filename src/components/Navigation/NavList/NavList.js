import React from 'react';

import NavListItem from './NavListItem//NavListItem';

const navList = ( props ) => {

    const navType = props.navType;

    let list = null;

    if (navType === "sideBar") {
        list = (
            <React.Fragment>
                <NavListItem link="#projects">Projects</NavListItem>
                <NavListItem link="#about">About</NavListItem>
                <NavListItem link="#contact">Contact</NavListItem>            
            </React.Fragment>
        );
    } else if (navType === "socNav") {
        list = (
            <React.Fragment>
                <NavListItem link="https://www.linkedin.com/in/ruemisa/" target="_blank"><i class="fab fa-linkedin-in"></i></NavListItem>
                <NavListItem link="https://github.com/ruemisa" target="_blank"><i class="fab fa-github-alt"></i></NavListItem>
                <NavListItem link="https://www.instagram.com/ruewoulddo/" target="_blank"><i class="fas fa-camera-retro"></i></NavListItem>
            </React.Fragment>
        );
    }

    return (
        <ul>
            { list }
        </ul>
    )
}

export default navList;
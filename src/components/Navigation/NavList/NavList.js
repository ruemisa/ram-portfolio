import React from 'react';

// Components
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
                <ul>
                    <NavListItem 
                        link="https://www.linkedin.com/in/ruemisa/" 
                        target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </NavListItem>
                    <NavListItem 
                        link="https://github.com/ruemisa" 
                        target="_blank">
                        <i className="fab fa-github-alt"></i>
                    </NavListItem>
                    <NavListItem 
                        link="https://www.instagram.com/ruewoulddo/" 
                        target="_blank">
                        <i className="fas fa-camera-retro"></i>
                    </NavListItem>
                </ul>
                
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
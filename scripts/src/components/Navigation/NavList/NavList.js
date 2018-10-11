import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

// Components
import NavListItem from './NavListItem//NavListItem';


const navList = ( props ) => {

    const navType = props.navType;

    let list = null;

    if (navType === "sideBar") {
        list = (
            <React.Fragment>
                <ScrollIntoView selector="#projects">
                    <NavListItem>Projects</NavListItem>
                </ScrollIntoView>
                <ScrollIntoView selector="#about">
                    <NavListItem>About</NavListItem>
                </ScrollIntoView>
                <ScrollIntoView selector="#contact">
                    <NavListItem>Contact</NavListItem>            
                </ScrollIntoView>
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
import React from 'react';

import NavListItem from './NavListItem//NavListItem';

const navList = ( props ) => {

    const navType = props.navType;

    let list = null;

    if (navType === "sideBar") {
        list = (
            <React.Fragment>
                <NavListItem>Projects</NavListItem>
                <NavListItem>About</NavListItem>
                <NavListItem>Contact</NavListItem>            
            </React.Fragment>
        );
    } else if (navType === "socNav") {
        list = (
            <React.Fragment>
                <NavListItem>Twitter</NavListItem>
                <NavListItem>Twitter</NavListItem>
                <NavListItem>Twitter</NavListItem>
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
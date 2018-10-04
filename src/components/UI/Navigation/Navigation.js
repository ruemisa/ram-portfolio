import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => {
    return (
        <ul>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/projects">Projects</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
        </ul>
    );
}

export default navigation;
import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => {
    
    return (
        <ul>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/projects">Projects</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
        </ul>
    );
}

export default navigation;
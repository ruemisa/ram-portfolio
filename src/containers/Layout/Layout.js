import React, { Component } from 'react';

import Landing from '../../components/Landing/Landing';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';

class Layout extends Component {

    render() {
        return (
            <div> 
                <Landing />
                <Projects />
                <About />
            </div>
        );
    }

}


export default Layout;
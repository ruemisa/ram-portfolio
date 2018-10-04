import React, { Component } from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <main>
                    { this.props.children }
                </main>
                <Footer />

            </React.Fragment>            
        );
    }

}

export default Layout;
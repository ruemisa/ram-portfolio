import React, { Component } from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';

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
                <div> SIDE MENU </div>
                <main>
                    { this.props.children }
                </main>
                <div> FOOTER </div>

            </React.Fragment>            
        );
    }

}

export default Layout;
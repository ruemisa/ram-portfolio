import React, { Component } from 'react';

import './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout />
            </div>
        );
    }
}

export default App;

// TO ENABLE CSS MODULES 
// using the extension .module.css
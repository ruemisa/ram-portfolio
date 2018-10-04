import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Layout from './containers/Layout/Layout';
class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

// TO ENABLE CSS MODULES 
 // using the extension .module.css
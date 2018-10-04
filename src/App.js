import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout>                 
                        <Switch>
                            <Route path="/projects" component={ Projects } />
                            <Route path="/about" component={ About } />
                            <Route exact path="/" component={ Landing } />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

// TO ENABLE CSS MODULES 
 // using the extension .module.css
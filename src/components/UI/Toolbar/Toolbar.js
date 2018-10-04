import React from 'react';

import Navigation from '../Navigation/Navigation';

const toolbar = (props) => {
    return (
        <header>
            <div>
                <h1>RAM</h1>
            </div>
            <Navigation />
        </header>
    );
}

export default toolbar;
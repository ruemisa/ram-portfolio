import React from 'react';

const navListItem = ( props ) => {
    return (
        <li>
            <a href={ props.link } target={ props.target }>{ props.children }</a>
        </li>
    );
}

export default navListItem;
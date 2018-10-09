import React from 'react';

const navListItem = ( props ) => {
    return (
        <li 
            href={ props.link }
            target="_blank">
            { props.children }
        </li>
    );
}

export default navListItem;
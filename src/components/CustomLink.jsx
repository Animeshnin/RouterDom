import React from 'react';
import {Link, useMatch} from 'react-router-dom';

function CustomLink({children, to}) {
    const match = useMatch(to)

    return (
        <Link to={to}>
            {children}
        </Link>
    );
}

export default CustomLink;
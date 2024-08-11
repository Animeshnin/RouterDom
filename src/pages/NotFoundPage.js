import React from 'react';
import {Link} from 'react-router-dom';
function NotFoundPage(props) {
    return (
        <div>
            <h1>Not found page go <Link to="/">home</Link></h1>

        </div>
    );
}

export default NotFoundPage;
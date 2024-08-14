import React from 'react';
import {Link, Outlet,} from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <ul>
                <li><Link to={'contacts'}>Our Contacts</Link></li>
                <li><Link to={'team'}>Our team</Link></li>
            </ul>

        <Outlet/>
        </div>
    );
}

export default About;
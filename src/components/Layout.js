import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const setActive = ({isActive}) =>
    [
        isActive ? "header__item active-link" : "header__item",
    ].join(' ')

function Layout() {
    return (
        <>
            <header>
                <ul className={'header__list'}>
                    <li><NavLink      className={setActive}
                                      to="/">House</NavLink></li>
                    <li ><NavLink className={setActive} to="/blog">Blog</NavLink></li>
                    <li ><NavLink className={setActive} to='/about'>About</NavLink></li>
                </ul>



            </header>
            <div className="container">
                <Outlet/>
            </div>
            <footer>2021</footer>
        </>

    );
}

export default Layout;
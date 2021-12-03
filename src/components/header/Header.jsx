import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.container}>
                <div className={styles.long_text}>Escape.</div>
                <ul>

                    <li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
                    <li><NavLink activeClassName={styles.active} to="categories">Categories</NavLink></li>
                    <li><NavLink activeClassName={styles.active} to="about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>

            </div>


        </div>
    );
};

export default Header;

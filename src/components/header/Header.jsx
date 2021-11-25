import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.container}>
                <div className={styles.long_text}>Escape.</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="categories">Categories</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>

            </div>


        </div>
    );
};

export default Header;

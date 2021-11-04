import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.container}>
                <div className={styles.long_text}>Escape.</div>
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>



        </div>
    );
};

export default Header;

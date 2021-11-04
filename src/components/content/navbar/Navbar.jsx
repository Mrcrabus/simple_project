import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar__wrapper}>
            <div className={styles.container}>
                <div>Nature</div>
                <div>Photography</div>
                <div>Relaxation</div>
                <div>Vacation</div>
                <div>Travel</div>
                <div>Adventure</div>
            </div>
        </div>
    );
};

export default Navbar;

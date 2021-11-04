import React from 'react';
import styles from './HeaderSection.module.css'
import MyButton from "../UI/MyButton";

const HeaderSection = () => {
    return (
        <div className={styles.hero__section}>
            <div className={styles.hero__content}>
                <div className={styles.hero__heading}>Let's do it together.</div>
                <div className={styles.hero__subheading}>We travel the world in search of stories. Come along for the ride.</div>
                <MyButton>View Latest Posts</MyButton>
            </div>

        </div>
    );
};

export default HeaderSection;

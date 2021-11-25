import React from 'react';
import styles from './MainSection.module.css'
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";

const MainSection = () => {
    return (
        <div className={styles.main__section}>
            <div className={styles.main__wrapper}>
                <CategoriesBlock/>
                <CategoriesBlock/>
                <CategoriesBlock/>
                <CategoriesBlock/>
                <CategoriesBlock/>
            </div>
        </div>
    );
};

export default MainSection;

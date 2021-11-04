import React from 'react';
import styles from './MyButtton.module.css';

const MyButton = (props) => {
    return (
        <div className={styles.MyBtn}>
            {props.children}
        </div>
    );
};

export default MyButton;

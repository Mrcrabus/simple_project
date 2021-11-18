import React from 'react';
import styles from "./Thumbnail.module.css";
import avatar from '../../../../../access/img_avatar.png'


const Thumbnail = () => {
    return (
        <div className={styles.featured__thumbnail}>

            <div>
                <div className={styles.btn}>Click Me</div>
            </div>
            <div className={styles.featured__text}>
                <div className={styles.featured__title}>
                    The Road Ahead
                </div>
                <div className={styles.featured__description}>
                    Once of year, go someplace you've never been before.
                </div>
                <div className={styles.div__block}>
                    <div className={styles.author}>
                        <img src={avatar} alt="..."/>
                        <div>Will Winston</div>
                    </div>
                    <div className={styles.date}>
                        September 25, 2015
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Thumbnail;

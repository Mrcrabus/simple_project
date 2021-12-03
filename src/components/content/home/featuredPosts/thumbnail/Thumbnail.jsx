import React from 'react';
import styles from "./Thumbnail.module.css";
import {Link} from "react-router-dom";


const Thumbnail = ({title, userImg, img, post}) => {
    return (

        <div className={styles.featured__thumbnail} style={{background: userImg}}>

            <div>
                <div className={styles.btn}><Link to={`/categories/${post.id}`}>Click Me</Link></div>
            </div>
            <div className={styles.featured__text}>
                <div className={styles.featured__title}>
                    The Road Ahead
                </div>
                <div className={styles.featured__description}>
                    {title}
                </div>
                <div className={styles.div__block}>
                    <div className={styles.author}>
                        <img src={img} alt="..."/>
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

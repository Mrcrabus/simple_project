import React from 'react';
import BlogThumbnail from "./blogThumbnail/BlogThumbnail";
import styles from './MostRecent.module.css'

const MostRecent = () => {
    return (
        <div className={styles.mostRecent}>

            <BlogThumbnail/>
            <BlogThumbnail/>
            <BlogThumbnail/>


        </div>
    );
};

export default MostRecent;

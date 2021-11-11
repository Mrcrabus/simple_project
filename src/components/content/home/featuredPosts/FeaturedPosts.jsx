import React from 'react';
import styles from './FeaturedPosts.module.css'
import Thumbnail from "./thumbnail/Thumbnail";

const FeaturedPosts = () => {
    return (
        <div className={styles.featured__posts}>
            <div className={styles.header}>Featured Posts</div>
            <hr/>
            <div className={styles.wrapper__thumbnail}>
                <Thumbnail/>
                <Thumbnail/>
            </div>
        </div>
    );
};

export default FeaturedPosts;

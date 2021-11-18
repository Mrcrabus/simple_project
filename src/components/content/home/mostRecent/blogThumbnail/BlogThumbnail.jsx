import React from 'react';
import styles from './BlogThumbnail.module.css'

const BlogThumbnail = () => {
    return (
        <div className={styles.blogThumbnail}>
            <div className={styles.blogThumbnail__wrapper}>
                <div>
                    <div className={styles.btn}>Click Me</div>
                </div>
                <div className={styles.thumbnail__text}>
                    <div className={styles.thumbnail__detail}>
                        Still Standing Tall
                    </div>
                    <div className={styles.thumbnail__info}>
                        <div className={styles.thumbnail__author}>
                            <div className={styles.img}/>
                            <div>Will Winston</div>
                        </div>
                        <div>04/12/2012</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogThumbnail;

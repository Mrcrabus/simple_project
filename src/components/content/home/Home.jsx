import React from 'react';
import styles from './Home.module.css'
import FeaturedPosts from "./featuredPosts/FeaturedPosts";
import MostRecent from "./mostRecent/MostRecent";

const Home = () => {
    return (
        <div className={styles.home__wrapper}>
            <div className={styles.home__container}>
                <FeaturedPosts/>
                <div className={styles.section__title}>Most Recent</div>
                <hr/>
                <MostRecent/>
            </div>
        </div>
    );
};

export default Home;

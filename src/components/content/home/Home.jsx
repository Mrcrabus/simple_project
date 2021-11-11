import React from 'react';
import styles from './Home.module.css'
import FeaturedPosts from "./featuredPosts/FeaturedPosts";
import MostRecent from "./mostRecent/MostRecent";

const Home = () => {
    return (
        <div className={styles.home__wrapper}>
            <div className={styles.home__container}>
                <FeaturedPosts/>
                <MostRecent/>
            </div>
        </div>
    );
};

export default Home;

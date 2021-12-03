import React, {useEffect, useState} from 'react';
import styles from './FeaturedPosts.module.css'
import Thumbnail from "./thumbnail/Thumbnail";
import axios from "axios";

import avatar from '../../../../access/img_avatar.png'


const FeaturedPosts = () => {


    let [posts, setPosts] = useState([{
            id: 1,
            title: 'hi',
            url: avatar,
            thumbnailUrl: avatar

        }]
    )

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/`, {
            params: {
                _limit: 2
            }
        }).then(res => {
            setPosts(res.data)
        })
    }, [])


    return (
        <div className={styles.featured__posts}>
            <div className={styles.header}>Featured Posts</div>
            <hr/>
            <div className={styles.wrapper__thumbnail}>
                {posts.map((post, index) =>
                    <Thumbnail key={index} title={post.title}
                               img={post.thumbnailUrl}
                               userImg={post.url}
                               post={post}

                    />
                )}


            </div>
        </div>
    );
};

export default FeaturedPosts;

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './Post.module.css'
import axios from "axios";
import avatar from "../../../access/img_avatar.png";

const Post = () => {

    const {id} = useParams()

    let [post, setPost] = useState([{
            id: 1,
            title: 'hi',
            url: avatar,
            thumbnailUrl: avatar

        }]
    )

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => {
            setPost(res.data)
        })
    }, [id])

    return (
        <div className={styles.post}>
            <div>
                {post.title}
            </div>
        </div>
    );
};

export default Post;

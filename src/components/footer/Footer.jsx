import React from 'react';
import styles from './Footer.module.css'
import Form from "../UI/MyForm/Form";
import Header from "../header/Header";


const Footer = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section__heading}>
                    <h1>Stay in Touch</h1>
                    <hr/>
                </div>

                <div className={styles.form}>
                    <Form/>
                </div>

            </div>
            <div>
                <Header/>
            </div>


        </div>


    );
};

export default Footer;

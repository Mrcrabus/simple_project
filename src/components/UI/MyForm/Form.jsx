import React from 'react';
import styles from './Form.module.css'

const Form = () => {
    return (
        <div className={styles.form__container}>
            <form>
                <input className={styles.form} type="text" name="name" placeholder='Enter your email address'/>
            </form>
            <span className={styles.send__email}>Submit</span>
        </div>
    );
};

export default Form;

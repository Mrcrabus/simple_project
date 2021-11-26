import React from 'react';
import styles from './AboutMainSection.module.css'
import about_img from '../../../../access/about_img.jpg'

const AboutMainSection = () => {
    return (
        <div className={styles.about__main__section}>
            <div className={styles.columns}>
                <img src={about_img} alt="..."/>
                <div className={styles.text}>
                    <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images,
                        and video all in one place instead of having to add and format them individually. Just
                        double-click and easily create content.</p>
                    <p>A rich text element can be used with static or dynamic content. For static content, just drop it
                        into any page and begin editing. For dynamic content, add a rich text field to any collection
                        and then connect a rich text element to that field in the settings panel. Voila!</p>
                    <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a
                        class is added to the rich text element using the "When inside of" nested selector system.</p>
                </div>

            </div>

        </div>
    );
};

export default AboutMainSection;

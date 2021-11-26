import React from 'react';
import styles from './About.module.css'
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutMainSection from "./AboutMainSection/AboutMainSection";

const About = () => {
    return (
        <div>
            <AboutHeader/>
            <AboutMainSection/>
        </div>
    );
};

export default About;

import React from 'react';
import Header from "./components/header/Header";
import HeaderSection from "./components/headerSection/HeaderSection";
import Footer from "./components/footer/Footer";
import Home from "./components/content/home/Home";
import Navbar from "./components/content/navbar/Navbar";

const App = () => {
    return (
        <div>
            <Header/>
            <HeaderSection/>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default App;

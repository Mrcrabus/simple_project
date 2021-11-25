import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/content/home/Home";
import {Route, Routes} from "react-router-dom";
import Categories from "./components/content/categories/Categories";
import About from "./components/content/about/About";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/about' element={<About/>}/>


            </Routes>


            <Footer/>
        </div>
    );
};

export default App;

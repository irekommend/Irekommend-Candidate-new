import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Header from './comp/Header';

const App=()=>{
    return (
        <div>
          {Header()}
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
            </Routes>
        </div>
    )
}

export default App;
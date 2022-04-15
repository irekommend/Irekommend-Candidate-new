import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Header from './comp/Header';
import Footer from './comp/Footer'

const App=()=>{
    return (
        <div>
          {Header()}
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
            </Routes>
                        
            <div style={{height: "500px"}} >{Footer()}</div>

        </div>
    )
}

export default App;
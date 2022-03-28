import React from "react";
import {useState,useEffect} from 'react';
import './index.css';
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BrowserRouter as 
        Router, 
        Routes, 
        Route} 
    from 'react-router-dom'

function App (){
    const [mobile,setMobile] = useState(false);
    const [size,setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth);
        });
        window.removeEventListener('resize',()=>{
            setSize(window.innerWidth);
        })
        if(size>675){
            setMobile(false);
        }
        else if(size<=675){
            setMobile(true)
        }
    },[size])
    return(
        <>
        <Router>
            <Navbar mobile={mobile}/>
            <Routes>
                <Route exact path="/" element={<LandingPage mobile={mobile}/>}/>
                <Route exact path="/Home" element={<LandingPage mobile={mobile}/>}/>
            </Routes>
            <Footer mobile={mobile}/>
        </Router>
        </>
    )
}
export default App;
import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/navbar/Hero";
import Analytics from "./components/Analytics";
import NewsLatter from './components/newsLatter'
import Cards from "./Card";
import Footer from "./components/Footer";



function App() {
  return (
    <div >
    <Navbar/>
    <Hero />
    <Analytics/>
    <NewsLatter/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;

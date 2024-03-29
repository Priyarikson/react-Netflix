import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import "./App.css";

export default function App() {
    
  return (
    <div>
        <Navbar />
        <Hero />
        <Card />
    </div>
  );
}
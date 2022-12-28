import React from 'react';
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="hero--button">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</h1>
      </div>
      <div className="fade-bottom">

      </div>

    </div>
  )
}

export default Hero
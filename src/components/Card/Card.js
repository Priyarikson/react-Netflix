import React from 'react';
import "./Card.css";
import card from './card.jpg'
function Card() {
  return (
    <div className='card-main'>
        <h2>Title</h2>
        <div className='cards'>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
            <img src={card} alt="card" className='card--image'/>
        </div>
    </div>
  )
}

export default Card
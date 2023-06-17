import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123">
    <div className='gigcard'>
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            
        </div>
        <div className="details">

        </div>
    </div>
    </Link>
  )
}

export default GigCard
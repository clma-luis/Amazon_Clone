import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className="NotFound">
          <div className="NotFound__container">
              <Link to="/">
            <div className="NotFound__Img active">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" alt="" /> 
            </div>
              </Link>
              
            <div className="NotFound__Img active">
            <a target="_blank" href="https://www.aboutamazon.com/news/workplace/how-much-does-amazon-love-dogs-just-ask-one-of-the-7-000-pups-that-work-here?utm_source=gateway&utm_medium=404" rel="noreferrer">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/149._TTD_.jpg" alt="" /></a>
            </div>
         
          </div>
            
        </div>
    )
}

export default NotFound

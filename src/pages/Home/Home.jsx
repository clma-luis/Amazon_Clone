import React from 'react'
import './Home.scss'
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import ProductPost from '../../components/ProductPost/ProductPost'
import { SliderData } from '../../components/Carousel/SliderData'
import {HomeData} from './Data/HomeData'

const Home = () => {
    return (
        <div className='home'>
            <CarouselContainer slides={SliderData}/>

            <div className="home__row">
               {HomeData.map((item, index) => {
             return <ProductPost title={item.title} image={item.image} _url={item.url}  />

               })}
            </div>
            

º
           
        </div>
    )
}

export default Home

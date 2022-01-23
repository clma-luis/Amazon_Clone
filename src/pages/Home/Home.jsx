import React from 'react'
import './Home.scss'
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import { SliderData } from '../../components/Carousel/SliderData'

const Home = () => {
    return (
        <div className='home'>
            <CarouselContainer slides={SliderData}/>


           
        </div>
    )
}

export default Home

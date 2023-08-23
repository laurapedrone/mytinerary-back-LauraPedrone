import React from 'react'
import Carousel from 'react-multi-carousel'
import CardsTravelMain from '../CardsTravelMain/CardsTravelMain'
import { cardsData, responsive } from "./carousellData"

const travel = cardsData.map(item => (<CardsTravelMain key={item.id} name={item.name} imageUrl={item.imageUrl} city={item.city} />))

const CarouselMain = () => {
    return (
        <section className='container'>
            <h2 className="text-center">Popular MYTINERARIES!</h2>
            <Carousel showDots={true} responsive={responsive}>{travel}</Carousel>
        </section>
    )
}

export default CarouselMain
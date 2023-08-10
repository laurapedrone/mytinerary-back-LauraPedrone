import LayoutMain from '../Layout/LayoutMain'
import HeroMain from '../../components/HeroMain/HeroMain'
import CardsTravelMain from '../../components/CardsTravelMain/CardsTravelMain'
import Carousel from 'react-multi-carousel'
import { cardsData, responsive } from "./dataHome"
import './home.css'


const HomeM = () => {
  const travel = cardsData.map(item => (<CardsTravelMain name={item.name} imageUrl={item.imageUrl} city={item.city} />))

  return (
    <>
    <HeroMain />
    <LayoutMain>
      <section className='container'>
        <h2 className="text-center">Popular My Tinerary</h2>
        <Carousel showDots={true} responsive={responsive}>{travel}</Carousel>
      </section>
    </LayoutMain>
    </>
  )
}

export default HomeM

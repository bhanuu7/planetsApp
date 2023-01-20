// Write your code here
// import {Component} from 'react'
import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  // console.log(planetsList)

  return (
    <div className="planetBg" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings} className="slider">
        {planetsList.map(eachItem => (
          <PlanetItem item={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider

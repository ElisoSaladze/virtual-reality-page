import React from 'react'
import { ServiceItems } from './ServiceItems'
import { ServiceItemsPartOne } from './ServiceItems'
import { ServiceItemsPartTwo } from './ServiceItems'
import '../styles/Services.css'

const Services = () => {
  return (
    <div className='service-parent'>
        <div className='service-div'>
          {ServiceItems.map((item, index) => {
            return (
              <div className="service-card" key={index}>
                <img className={item.cName} src={item.image} alt={item.alt} />
                <p>{item.text}</p>
              </div>
              )
              })}
        </div>
        <div className='service-div-mobile'>
          {ServiceItemsPartOne.map((item, index) => {
            return (
              <div className="service-card-mobile" key={index}>
                <img className={item.cName} src={item.image} alt={item.alt} />
                <p>{item.text}</p>
              </div>
              )
              })}
        </div>
        <div className='service-div-mobile-1'>
          {ServiceItemsPartTwo.map((item, index) => {
            return (
              <div className="service-card-mobile" key={index}>
                <img className={item.cName} src={item.image} alt={item.alt} />
                <p>{item.text}</p>
              </div>
              )
              })}
        </div>
    </div>
  )
}

export default Services

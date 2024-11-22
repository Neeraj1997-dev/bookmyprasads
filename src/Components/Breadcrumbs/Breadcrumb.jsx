import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const{product} = props;
  return (
    <div className='breadcrum'>
       HOME <img src={arrow_icon} alt='breadcrum_arrow_icon' />SHOP<img src={arrow_icon} alt='breadcrum_arrow_icon' />{product.name}
    </div>
  )
}

export default Breadcrumb

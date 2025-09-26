import React from 'react'
import './style/home.scss';
import { SpecialityData } from '../assets/assets';
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='specialityMenu'>
    <div className="doctor-cg">
    <h2>Find by Speciality</h2>
    <p>
      Simply browse through our extensive list of trusted doctors, schedule
      your appointment hassle-free.
    </p>
    <div className="doctor-cg-img-div">
     {SpecialityData.map((item,index)=>(
        <Link className='flex flex-col  item-center text-xs cursor-pointer flex-shrink-0 hover:translate-y[-10px] transition-all duration-500' key={index}>
          <img className='w-16 sm:w-24 mb-2' src={item.images}/>
          <p>{item.speciality}</p>
        </Link>
  ))}
    </div>
  </div>
    </div>
  )
}

export default SpecialityMenu

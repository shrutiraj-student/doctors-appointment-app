import React, { useContext } from 'react'
//import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext';


const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext)
  function handleClick(){
    console.log("i was clicked ")
  }
  return (
    <div className='flex flex-col items-center gap my-16 text-grey-900 md-mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-col-auto pt-5 gap-4 px-3 sm:px-0'>{doctors.slice(0,10).map((item,index)=>( //container
        <div className='border border-blue-200 overflow:hidden rounded-xl cursor-pointer hover:translate-y-[-10px] duration:500 transition-all' key={index} onClick={()=> navigate(`/appointment/${item._id}`)}> {/*Card*/}
        <img className="bg-blue-50" src={item.image}/>
        <div className='p-4'>
        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
        <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
        </div>
      
        <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
        <p className='text-grey text-sm'>{item.speciality}</p>
        </div>
        </div>
      ))}</div>

      <button className='bg-blue-50 rounded-full text-grey px-12 py-3 mt-10' onClick={()=>{console.log("i was clicked"); navigate(`/all-doctors`); window.scrollTo(0,0)}}>more</button>
    </div>
  )
}

export default TopDoctors

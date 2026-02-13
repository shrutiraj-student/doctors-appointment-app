import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {useContext,useState} from 'react'

const Appointment = () => {
  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const [docInfo,setdocInfo] = useState(null);

  async function fetchDocInfo(){
    const docInfo = doctors.find(doc =>
        doc._id === docId
      );
      //console.log(docInfo);
      setdocInfo(docInfo);
  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  return docInfo && (
    <div className='container'>
      <Navbar/>
      {/*----- Doctor Detail---- */}
      <div className='flex flex-col sm:flex-row gap-4'>
      <div>
      <img src={docInfo.image} alt='' className='bg-primary w-full sm:max-w-72 rounded-lg'/>
      </div>
      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0'>
      {/*Name,Experiance,Degree */}
        <span className='flex items-center gap-2 !text-2xl !font-bold !text-grey-900'>{docInfo.name}</span>
        <img className='w-5' src='images/checkedIcon.svg'></img>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
        <p>{docInfo.degree} - {docInfo.speciality}</p>
        <button>{docInfo.experience}</button>
        </div>
      {/*Doctor About*/}
      <div className=''>
      <p>About</p>
      <img src='images/about.svg'/>
      <p>{docInfo.about}</p>
      </div>
        <p>Appointment Fees : ${docInfo.fee}</p>
      
      </div>
      </div>
      <div>
      <h1>Related Doctors</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto pt-5 gap-4 px-3 sm:px-0'>{doctors.filter(item => item.speciality === docInfo.speciality && item._id !== docInfo._id).slice(0,4).map((item,index)=>( //container
        <div className='border border-blue-200 overflow:hidden rounded-xl cursor-pointer hover:translate-y-2 duration-500 transition-all' key={index}> {/*Card*/}
        <img className="bg-blue-50" src={item.image}/>
        <div className='p-4'>
        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
        <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
        </div>
      
        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
        <p className='text-gray text-sm'>{item.speciality}</p>
        </div>
        </div>
      ))}</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Appointment

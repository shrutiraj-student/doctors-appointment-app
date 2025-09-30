import React, { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import { doctors } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const AllDoctor = () => {
  const { speciality } = useParams();
  console.log(speciality);
  const {doctors} = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  function applyFilter(){
    if(!doctors || doctors.length === 0)return;
      if(speciality){
        setFilterDoc(doctors.filter(docItem =>
            docItem.speciality.trim().toLowerCase() === speciality.toLowerCase()
        ))
      }
      else{
        setFilterDoc(doctors)
      }
  }

useEffect(()=>{
    applyFilter()
},[doctors,speciality])

  return (
    <div className="container">
      <Navbar />
      <div>
        <p className="text-grey-600">Browse through the doctors specialist.</p>
        <div className="flex flex-col sm:flex-row item-start gap-5 mt-5">
          <div className="flex-col gap-4 text-sm text-grey-600">
            <p className="border-grey-300 rouned p-1">General physician</p>
            <p className="border-grey-300 rouned p-1">Gynecologist</p>
            <p className="border-grey-300 rouned p-1">Dermatologist</p>
            <p className="border-grey-300 rouned p-1">Pediatricians</p>
            <p className="border-grey-300 rouned p-1">Neurologist</p>
            <p className="border-grey-300 rouned p-1">Gastroenterologist</p>
          </div>
          <div id="l" className="w-full grid grid-col-auto gap-4 gap-y-6">
            {filterDoc.map(
              (
                item,
                index //container
              ) => (
                <div
                  className="border border-blue-200 overflow:hidden rounded-xl cursor-pointer hover:translate-y-[-10px] duration:500 transition-all"
                  key={index}
                  onClick={() => navigate(`/appointment/${item._id}`)}
                >
                
                  {/*Card*/}
                  <img className="bg-blue-50" src={item.image} />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 rounded-full bg-green-500"></p>
                      <p>Available</p>
                    </div>

                    <p className="text-grey-900 text-lg font-medium">
                      {item.name}
                    </p>
                    <p className="text-grey text-sm">{item.speciality}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Outlet/>
      <Footer />
    </div>
  );
};

export default AllDoctor;

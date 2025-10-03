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
            docItem.speciality.toLowerCase() === speciality.toLowerCase()
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
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
          <div className=" flex flex-col gap-4 text-sm text-grey-600">
            <p onClick={()=> [speciality === 'General physician' ? navigate("/doctors" ) : navigate("/doctors/General physician")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "General physician" ? "bg-indigo-100" : ""}`}>General physician</p>
            <p onClick={()=> [speciality === 'Gynecologist' ? navigate("/doctors" ) : navigate("/doctors/Gynecologist")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100" : ""}`}>Gynecologist</p>
            <p onClick={()=> [speciality === 'Dermatologist' ? navigate("/doctors" ) : navigate("/doctors/Dermatologist")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100" : ""}`}>Dermatologist</p>
            <p onClick={()=> [speciality === 'Pediatricians' ? navigate("/doctors" ) : navigate("/doctors/Pediatricians")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100" : ""}`}>Pediatricians</p>
            <p onClick={()=> [speciality === 'Neurologist' ? navigate("/doctors" ) : navigate("/doctors/Neurologist")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100" : ""}`}>Neurologist</p>
            <p onClick={()=> [speciality === 'Gastroenterologist' ? navigate("/doctors" ) : navigate("/doctors/Gastroenterologist")]} className={`border border-grey-300 rounded p-1 cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100" : ""}`}>Gastroenterologist</p>
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

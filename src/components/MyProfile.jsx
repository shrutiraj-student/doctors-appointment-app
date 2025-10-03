import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyProfile = () => {
  const [userData, setUserDate] = useState({
    name: "Jhon Deo",
    images: "/images/profile_pic.jpeg",
    email: "jhon123@gmail.com",
    phone: "+91 1234567890",
    address: {
      line1: "Anand Vihar",
      line2: "Delhi",
    },
    gender: "Male",
    dob: "1999-12-01",
  });

  const [isEdit, setIsedit] = useState(false);
  //console.log(userData)
  return (
    <div className="container">
      <Navbar />
      <div className="max-w-lg flex flex-col gap-2 text-sm">
        <img className="w-36 rounded" src={userData.images} />
        {isEdit ? (
          <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            type="text"
            value={userData.name}
            onChange={(event) =>
              setUserDate((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
        )}
        <hr className="bg-zinc-400 h-1 border-none" />
        <div>
          <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-4 ">
            <p className="font-medium">Email id : </p>
            <p className="text-primary">{userData.email}</p>
            <p className="font-medium">Phone: </p>
            {isEdit ? (
              <input
              className="text-primary"
                type="text"
                value={userData.phone}
                onChange={(event) =>
                  setUserDate((prev) => ({
                    ...prev,
                    phone: event.target.value,
                  }))
                }
              />
            ) : (
              <p>{userData.phone}</p>
            )}
            <p className="font-medium">Address</p>
            {isEdit ? (
              <p>
                <input
                className="bg-gray-100 max-w-52"
                  type="text"
                  value={userData.address.line1}
                  onChange={(event) =>
                    setUserDate((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: event.target.value },
                    }))
                  }
                />
                <br />
                <input
                className="bg-gray-100 max-w-52"
                  type="text"
                  value={userData.address.line2}
                  onChange={(event) =>
                    setUserDate((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: event.target.value },
                    }))
                  }
                />
              </p>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 ">
        <p className="font-medium">Gender:</p>
        {
            isEdit 
            ? <select className="max-w-20 bg-gray-100" value={userData.gender} onChange={(event) => setUserDate((prev)=> ({...prev,gender:event.target.value}))}>
            <option value="Male">Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Other"}>Other</option>
            </select>
            : <p className="text-gray-400">{userData.gender}</p>
        }
        <p className="font-medium">BirthDay</p>
        {
            isEdit 
            ? <input className="max-w-28 " type="date" value={userData.dob} onChange={(event) => setUserDate((prev)=> ({...prev,dob:event.target.value}))}/>
            : <p className="text-gray-400">{userData.dob}</p>
        }
        </div>
        </div>
        <div className="mt-10">
        {isEdit 
        ? <button className="border border-primary px-8 py-2 rounded-full hover:text-white  hover:bg-primary transition-all" onClick={()=>setIsedit(false)}>Save</button>
        : <button className="border border-primary px-8 py-2 rounded-full hover:text-white  hover:bg-primary transition-all" onClick={()=>setIsedit(true)}>Edit</button>
        }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;

import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { properyCreate } from '../../../slices/propertySlice';


export const Details = () => {

  const { items } = useSelector((state) => state.propertiesdb);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [buildingtype, setbuildingtype] = useState("");
  const [propstatus, setpropstatus] = useState("");
  const [rent, setrent] = useState("");
  const [propaddress, setpropaddress] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      properyCreate({
        buildingtype,
        propstatus,
        rent,
        propaddress,

      })
    );
    navigate("./final");
  };


  return (
    <div className="flex flex-col ">
      <div className='text-center  rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-4 text-white-700'>Property Listed Form</h1>
      </div>
      <h1 className='text-center mt-5 mb-5 text-blue-700 font-bold text-3xl'>Property Information</h1>
      <div className="shadow-white shadow-xl rounded-2xl">
        <form className='ml-5 mr-5' onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mt-3"  >
            <div className="form-group mb-6" >
              <select className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setbuildingtype(e.target.value)} required >
                <option value="">Building Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Multiple Family">Multiple Family</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className="form-group mb-6">
              <select className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setpropstatus(e.target.value)} required >
                <option value="">Property Status Types</option>
                <option value="Vacant">Vacant</option>
                <option value="Occupied">Occupied</option>
                <option value="Owner Occupied">Owner Occupied</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" >
            <div className="form-group mb-6">
              <input type="number" className="form-control block w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
             border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="Monthly Rental Income"
                onChange={(e) => setrent(e.target.value)} required />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Property Address"
                onChange={(e) => setpropaddress(e.target.value)} required />
            </div>
          </div>
          <div className='container flex justify-around mt-4 mb-8'>
            {/* <NavLink to='/account/listproperty/step1' >
              <input className='bg-blue-700   text-white uppercase py-2 px-4 
            rounded-xl font-semibold curse-pointer border-2 border-slate-300
            hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
                type="submit" value="Back" />
            </NavLink> */}

            <Button className='btn  bg-blue-700  py-2 px-4 text-white  uppercase
            rounded-xl font-semibold curse-pointer border-2 border-slate-300
            hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
              type="submit">
              {items === "pending" ? "Submitting" : "Confirm"}
            </Button>

          </div>
        </form>
      </div>
      <div className="mt-6">
        <p className="font-poppins mt-6 font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 SecondaryDAO. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

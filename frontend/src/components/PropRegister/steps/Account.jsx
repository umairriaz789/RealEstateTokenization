import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form'
import {personalCreate} from "../../../slices/personalSlice";
// import { useParams } from "react-router-dom";


export const Account = () => {


  const { createStatus } = useSelector((state) => state.personaldb);
  const navigate = useNavigate();
  // const {params} = useParams();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [card, setidnum] = useState("");
  const [address, setadd] = useState("");


  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      personalCreate({
        name,
        email,
        phone,
        card,
        address,
      })
    );
    navigate("./step2")
  };


  return (
    <div className="flex flex-col">
      <div className='text-center  rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-4 text-white-700'>Property Listed Form</h1>
      </div>
      <h1 className='text-center mt-5 mb-5 text-blue-700 font-bold text-3xl'>Personal Information</h1>
      <div className="shadow-white shadow-xl rounded-2xl">
        <form className='ml-5 mr-5'  onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
           bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="name"
                onChange={(e) => setName(e.target.value)} required
              // {...register("name", {
              //   required: {
              //     value: true,
              //     message: ' Name is Required'
              //   }
              // })}
              />

              {/* <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label> */}

            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Email"
                onChange={(e) => setemail(e.target.value)} required
              // {...register("email", {
              //   required: {
              //     value: true,
              //     message: ' Email is Required'
              //   }
              // })}
              />
              {/* <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="tel" className="form-control block w-full px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="Phone Number"
                onChange={(e) => setphone(e.target.value)} required
              // {...register("email", {
              //   required: {
              //     value: true,
              //     message: ' Email is Required'
              //   }
              // })} 
              />
              {/* <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label> */}
            </div>
            <div className="form-group mb-6">
              <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="ID Number" 
                onChange={(e) => setidnum(e.target.value)} required 
                />
              {/* <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label> */}
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding
          border border-solid border-gray-300 rounded  transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Complete Address" 
              onChange={(e) => setadd(e.target.value)} required 
              />
            {/* <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label> */}
          </div>
          <div className='container flex justify-around mt-4 mb-8'>
            {/* <input className='bg-white  text-slate-400  uppercase py-2 px-4 
            rounded-xl font-semibold curse-pointer border-2 border-slate-300
            hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
            type="submit" value="Back" /> */}
              <Button className='btn  bg-blue-700  py-2 px-6 text-white  uppercase
              rounded-xl font-semibold curse-pointer border-2 border-slate-300
              hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
               type="submit">
                    {createStatus === "pending" ? "Submitting" : "Next"}
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


{/* <a className='mt-10' href='/'>
<button className='h-10 px-5  text-green-500 transition-colors
duration-150 border border-white rounded-lg focus-shadow-outline
hover:bg-green-500 hover: text-green-100'>
  Closed
</button>
</a> */}
import React from 'react'
import tick from "../../../assets/tick.png"
export const Final = () => {
  return (
    <div className='container md:mt-10'>
      {/* <div className='text-center  rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-4 text-white-700'>Property Listed Form</h1>
      </div> */}
      <div className='flex flex-col items-center'>
        <div className='text-blue-700'>
          <img src={tick} className="mb-5 w-[140px] h-[80px]" />
        </div>
        <div className='mt-2 text-xl font-semibold uppercase text-blue-700'>
          Congratulation
        </div>
        <div className='text-lg font-semibold uppercase text-blue-700'>
          Your Request has been Submitted!
        </div>
        <a className='mt-10' href='/'>
          <button className='h-10 px-5 text-white transition-colors
          duration-150 border border-white rounded-lg focus-shadow-outline
          hover:bg-blue-700 hover: text-blue-100'>
            Closed
          </button>
        </a>
      </div>
      <div className="mt-10">
        <p className="font-poppins mt-10 font-normal text-center text-[18px] text-white">
          Copyright Ⓒ 2022 SecondaryDAO. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

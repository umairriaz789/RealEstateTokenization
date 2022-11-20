import React from 'react'
import PropertyList from './lists/PropertyList'

export const ListedProperty = () => {
  return (
    <div className="flex flex-col">
      <div className='text-center  rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-9 text-white-700'>Property Listed Request</h1>
      </div>
      <PropertyList />
    </div>
  )
}
export default ListedProperty;

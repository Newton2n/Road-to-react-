import React from 'react'
import { useParams } from 'react-router-dom'
 function User() {
    const {UserId} =useParams()
  return (
    
    <div className='bg-red-400 text-white text-4xl py-5  w-full flex justify-center'>user :{UserId}</div>
  )
};
export default User


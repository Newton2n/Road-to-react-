import React from 'react'
import {useRouteError} from "react-router-dom"
function githubError() {
    const error = useRouteError();
    console.log( "i am ",error)
  return (
        <div className='flex justify-center  bg-red-200'>
        <h1 className=' text-8xl my-20 font-bold text-red-600'>I Am Your Friend Error</h1>
    </div>
  )
}

export default githubError
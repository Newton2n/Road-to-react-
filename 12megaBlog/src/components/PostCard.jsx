import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../../appwrite/config'
 function  PostCard({$id,title,featuredImg}) {
  const [imgUrl,setImgUrl] =useState();
  useEffect(()=>{
   service.fileView(featuredImg).then((url)=> setImgUrl(url))
  
  },[])
 const imgView = service.filePreview(featuredImg)
console.log("img view in post card",imgView)
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
               <img src={imgUrl}  className='rounded-xl '/>

            </div>
            <h2  className='text-xl font-bold'>{title} </h2>
    </div>
    </Link>
  )
}

export default PostCard
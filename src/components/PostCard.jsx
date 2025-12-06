import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className='block group'>
        <div className='w-full bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden h-full flex flex-col'>
            <div className='w-full justify-center mb-4 overflow-hidden rounded-lg'>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='rounded-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' 
                />
            </div>
            <h2 className='text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors overflow-hidden text-ellipsis line-clamp-2'>
                {title}
            </h2>
        </div>
    </Link>
  )
}


export default PostCard
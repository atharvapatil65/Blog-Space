import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className='block group'>
        <div className='w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col transform hover:-translate-y-2'>
            <div className='relative w-full overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500' 
                />
                <div className='absolute top-4 right-4 z-20'>
                    <div className='px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        Read →
                    </div>
                </div>
            </div>
            <div className='p-6 flex-1 flex flex-col'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2 mb-3'>
                    {title}
                </h2>
                <div className='mt-auto pt-4 border-t border-gray-100'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <span>Read article</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}


export default PostCard
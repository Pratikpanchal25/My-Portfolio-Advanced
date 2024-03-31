import React from 'react'

export default function ProjectComponent({ title , image , content , link}) {
  return (
 <>
 
 <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 scale-up-hor-left">
       <div className='flex justify-start items-center mb-2 ' >
        <img className='w-[2.8rem] h-[2.8rem]' src={image} alt="" />
         <h2 class=" ml-2 text-lg sm:text-2xl text-black  font-semibold title-font mb-2">{title}</h2>
        </div>
         <p class="leading-relaxed text-base mb-4">{content}</p>
         <a href={link} target='blank' class="text-indigo-500 inline-flex items-center hover:scale-110 transition-[3s]">Preview
           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-4 ml-2 hover:scale-110 transition-[3s]" viewBox="0 0 24 24">
             <path d="M5 12h14M15 5l7 7-7 7"></path>
           </svg>
         </a>
       </div>
 </>
  )
}

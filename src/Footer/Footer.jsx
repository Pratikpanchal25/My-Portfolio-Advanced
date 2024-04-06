import React from 'react'


export default function Footer() {
  return (
    

<footer className="bg-white sm:mb-0 mb-[5rem] w-full text-black flex justify-center items-center sm:mt-[60px] relative " >
  
   <div className= '  h-[4rem] w-[30rem]  sm:flex-row flex justify-center sm:justify-between px-10 items-center'>
    
    <div className='flex sm:mt-0 mt-2 mr-5 sm:mr-0 justify-center  items-center'>
       <a href="https://github.com/Pratikpanchal25"> <img  className='sm:h-8 h-10 cursor-pointer' src="github.png" alt="" /></a>
        <span className='cursor-pointer sm:block hidden'> <a className='' href="https://github.com/Pratikpanchal25">GitHub</a></span>
    </div>
    <div className='flex  sm:mt-0 mt-2 justify-start items-center'>
        <img className='h-8 cursor-pointer sm:mr-0 mr-8 ' src="linkedin.jpg" alt="" />
        <span className='ml-2 cursor-pointer sm:block hidden'> <a className='' href="https://www.linkedin.com/in/pratik-panchal-352090235">LinkedIn</a></span>
    </div>
    <div className='flex  sm:mt-0 mt-2 mr-1  sm:mr-0 justify-center items-center'>
        <img className='h-8 cursor-pointer mr-2 ' src="netlify.png" alt="" />
        <span className='ml-2 cursor-pointer sm:block hidden' > <a className=' ' href="https://app.netlify.com/teams/pratikpanchal20040502/sites">Netlify</a></span>
    </div>
    
   
   </div>
</footer>

  )
}

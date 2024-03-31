import React from 'react'

export default function Home() {
  return (
    <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 sm:py-20 sm:mt-5  md:flex-row flex-col-reverse items-center z-0">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 sm:mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 sm:mt-8 text-black ml-5 font-bold ">Pratik Panchal..
        <br class="hidden lg:inline-block"/> <span className='text-2xl font-normal '>  Web Developer</span>
      </h1>
      <p class="mb-8  leading-relaxed font-semibold ml-5 text-black"> 
I am highly skilled web developer specializing in React.js, JavaScript, and Tailwind CSS. With a passion for creating dynamic and responsive user interfaces, I have proven track record of delivering high-quality web applications. My expertise lies in harnessing the power of cutting-edge technologies to build seamless and innovative digital experiences..</p>
     

      <div className=' sm:ml-5 sm:flex flex flex-col items-center sm:mt-10  text-3xl font-semibold text-black w-full'> 
          
        <div className='scale-up-hor-left flex justify-between items-center  sm:ml-5 sm:flex w-full sm:w-[30rem]'>
          <div className='text-[4rem] sm:pb-5  font-thin'>|</div>
          <img className=' w-[2rem] sm:w-[4rem] sm:h-[4rem] rounded-lg' src="html.png" alt="" />
          <img className=' w-[2rem] sm:w-[4rem] sm:h-[4rem] rounded-lg' src="css logo.png" alt="" />
          <img className=' w-[2rem] sm:w-[4rem] sm:h-[4rem] rounded-lg' src="js logo.png" alt="" />
          <img className='w-[2rem] sm:w-[4rem] sm:h-[4rem] rounded-lg' src="react.webp" alt="" />
          <img className=' w-[2rem] sm:w-[4rem] sm:h-[4rem] rounded-lg' src="tailwind.png" alt="" />
        </div>
      </div>
      <div class="flex justify-center mt-10 w-full">
        {/* <button class=" ml-5 inline-flex text-white bg-black border-0 py-2 px-10 focus:outline-none  rounded text-lg">Resume</button> */}
        
      </div>
    </div>
    <div class=" md:w-[20rem] w-5/6">
      <img class=" transform-[3s] object-cover object-center rounded-xl relative sm:right-20 shadow-black shadow-lg sm:mt-0 mt-5  sm:mb-0 mb-8 bottom-0 sm:bottom-0 " alt="hero" src="/Pratik_Profile (1).jpg"/>
    </div>
  </div>
</section>
  )
}

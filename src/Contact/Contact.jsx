import React from "react";

export default function Contact() {
  return (
    <section class="text-gray-600 body-font  relative z-1 puff-in-center">
      <div class="container px-5 py-[4rem] mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
            Hire Me
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-transparent bg-opacity-50 rounded border border-black   focus:bg-white  focus:ring-black  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-transparent bg-opacity-50 rounded border border-black   focus:bg-white  focus:ring-black  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-transparent bg-opacity-50 rounded border border-black  focus:bg-white   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-black border-0 py-2 px-16 focus:outline-none hover:scale-[1.05] transition-[3s] rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="  sm:flex-row w-full flex   justify-center items-center">
        <div className="sm:w-[40rem] sm:flex-row flex  flex-col justify-center items-center">
          <div className="w-[20rem]  flex justify-center items-center">
            <img className="w-5" src="mail.webp" alt="" />

            <p class=" ml-2  text-base pr-5 text-black">
              pratikpanchal20040502@gmail.com
            </p>
          </div>

          <div className="w-[15rem] flex justify-center items-center sm:mt-0 mt-5" >
            <img className="w-8" src="call.jpg" alt="" />

            <p class="  text-base  text-black">+91-9173511966</p>
          </div>
        </div>
      </div>
    </section>
  );
}

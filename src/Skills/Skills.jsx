import React from "react";

export default function Skills() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img className="rounded-xl" src="js logo.png" alt="" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Javascript
            </h2>
            <p className="leading-relaxed text-base">
              Proficient in JavaScript: DOM manipulation, ES6, asynchronous
              programming, React.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col-reverse">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              React JS
            </h2>
            <p className="leading-relaxed text-base">
              Proficient in React at a production level: robust component
              development, state management, optimization strategies.
            </p>
          </div>
          <div className="">
            <img
              className="rounded-xl sm:h-[8rem] sm:w-[10rem] h-[5rem] w-[5rem]"
              src="react.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img
              className="rounded-xl sm:h-[8rem] sm:w-[10rem] h-[5rem] w-[5rem]"
              src="node.png"
              alt=""
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ">
              Node Js
            </h2>
            <p className="leading-relaxed text-base">
              Proficient in Node.js with Express, Mongoose, and MongoDB
              integration.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col-reverse">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2  sm:flex hidden">
            MONGO DB
          </h2>
          <p className="leading-relaxed text-base">
            Proficient in MongoDB: data modeling, querying, indexing,
            replication, sharding, performance tuning.
          </p>
        </div>
        <div className="">
          <img
            className="rounded-xl sm:h-[8rem] sm:w-[10rem] h-[5rem] w-[5rem]"
            src="mongodb.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

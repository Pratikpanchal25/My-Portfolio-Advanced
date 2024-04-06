import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    console.log(form);
    setUsername("")
    setEmail("")
    setMessage("")

    emailjs
      .sendForm("pratik_id", "template_altltxh", form.current, {
        publicKey: "nq1eWQ3peS7nk96vI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="text-gray-600 body-font  relative z-1 puff-in-center">
      <div className="container px-5 py-[4rem] mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
            Hire Me
          </h1>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Name</label>
                <input
                  value={username}
                  type="text"
                  id="name"
                  name="name"
                  // onChange={(e)=> setUsername(e.target.value)}
                  className="w-full bg-transparent bg-opacity-50 rounded border border-black   focus:bg-white  focus:ring-black  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Email</label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  // onChange={(e)=> setEmail(e.target.value)}
                  className="w-full bg-transparent bg-opacity-50 rounded border border-black   focus:bg-white  focus:ring-black  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Message</label>
                <textarea
                  value={message}
                  id="message"
                  name="message"
                  // onChange={(e)=> setMessage(e.target.value)}
                  className="w-full bg-transparent bg-opacity-50 rounded border border-black  focus:bg-white   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={sendEmail}
                className="flex mx-auto text-white bg-black border-0 py-2 px-16 focus:outline-none hover:scale-[1.05] transition-[3s] rounded text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="  sm:flex-row w-full flex   justify-center items-center">
        <div className="sm:w-[40rem] sm:flex-row flex  flex-col justify-center items-center">
          <div className="w-[20rem]  flex justify-center items-center">
            <img className="w-5" src="mail.webp" alt="" />

            <p className=" ml-2  text-base pr-5 text-black">
              pratikpanchal20040502@gmail.com
            </p>
          </div>

          <div className="w-[15rem] flex justify-center items-center sm:mt-0 mt-5">
            <img className="w-8" src="call.jpg" alt="" />

            <p className="  text-base  text-black">+91-9173511966</p>
          </div>
        </div>
      </div>
    </section>
  );
}

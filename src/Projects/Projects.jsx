import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-10  mx-auto">
          <div class="flex mb-[7.2rem] flex-wrap">
            <ProjectComponent
              title={"Movie-Flix"}
              image={"cinema logo.jpg"}
              content={
                "React-based site offers a curated global movie collection. Explore details and access IMDb pages for an enriched cinematic experience."
              }
              link={"https://movieflix-by-pratik.netlify.app/"}
            />

            <ProjectComponent
              title={"Guess The Number"}
              image={"game logo.jpg"}
              content={
                "Expertly crafted vanilla JavaScript number guessing game with advanced features and a polished user interface for an engaging user experience."
              }
              link={"https://guessing-the-number-by-pratik.netlify.app/"}
            />

            <ProjectComponent
              title={"Your Events"}
              image={"event.png"}
              content={
                "A React-based events app meticulously developed to showcase and categorize local events, ensuring a professional and user-friendly experience."
              }
              link={"https://your-events-by-pratik.netlify.app/"}
            />

            <ProjectComponent
              title={"Currency Converter"}
              image={"currency.png"}
              content={
                "Built in React, our currency converter offers worldwide currency options with an intuitive layout, making it easy to convert between different currencies for smooth understanding."
              }
              link={"https://currency-converter-by-pratikpanchal.netlify.app/"}
            />

            <ProjectComponent
              title={"Password Generator"}
              image={"password logo.png"}
              content={
                "Introducing our robust password generator, crafted for maximum security. It has unlimited flexibility, generating strong passwords with any combination of numbers, special characters, and length to fortify your digital credentials."
              }
              link={"https://password-generator-by-pratik.netlify.app/"}
            />
            <ProjectComponent
              title={"Initial Portfolio Site"}
              image={"portfolio.jpg"}
              content={
                "During my early CSS learning phase, I designed a portfolio website to master CSS intricacies. Boasting an impressive UI and captivating color scheme, it showcases my dedication to aesthetic and functional web development."
              }
              link={"https://pratik-panchal.netlify.app/"}
            />
            <ProjectComponent
              title={"Advanced To do List"}
              image={"todo.png"}
              content={
                "Developed an advanced to-do list application using HTML, CSS, and vanilla JavaScript, featuring user registration with unique usernames and passwords. Data is securely stored in local storage for individual users."
              }
              link={"https://to-do-list-advanced-by-pratik-panchal.netlify.app/"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

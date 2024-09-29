import React from "react";
import profilePic1 from "../assets/images/profilePic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    
    <section id="home" className="bg-bgColor font-ubuntu text-white h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center h-full px-4 py-10 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center py-6">
          <img
            className="rounded-full h-[300px] w-[300px] max-w-full object-cover"
            src={profilePic1}
            alt="This is binary image"
          />
        </div>
        <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-center">Hi, I am Pratik Lokhande</div>
        <div className="text-2xl sm:text-3xl mb-4 font-bold text-mainColor text-center">
          Software Developer
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 py-4 text-lg">
          <a
            href="https://drive.google.com/file/d/1HKOHqDzoRb5ld6CFHDJGrbBoNAJ32bw9/view?usp=sharing" target="_blank"
            className="bg-bgColor border-solid border-2 border-mainColor p-2 rounded-xl hover:bg-mainColor hover:text-bgColor"
          >
            Resume
          </a>
          <a
            href="mailto:pratik127001@gmail.com"
            className="bg-bgColor border-solid border-2 border-mainColor p-2 rounded-xl hover:bg-mainColor hover:text-bgColor"
          >
            Let's Talk
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-10 py-4 text-lg">
          <a
            href="https://www.github.com/konprtk"
            target="_blank"
            className="text-white border-solid border-2 border-mainColor p-2 rounded-full h-12 w-12 flex items-center justify-center hover:bg-mainColor hover:text-bgColor"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/pratiklokhande14" className="text-white border-solid border-2 border-mainColor p-2 rounded-full h-12 w-12 flex items-center justify-center hover:bg-mainColor hover:text-bgColor">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <button className="text-white border-solid border-2 border-mainColor p-2 rounded-full h-12 w-12 flex items-center justify-center hover:bg-mainColor hover:text-bgColor">
            <FontAwesomeIcon icon={faXTwitter} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

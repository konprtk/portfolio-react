import React from "react";
import profilePic2 from "../assets/images/profilePic2.jpg";

function About() {
  return (
    <section id="about" className="bg-secondBgColor font-ubuntu text-white">
      <div className="flex items-center justify-center p-20 text-6xl font-bold">
        About <span className="flex pl-4 text-mainColor">Me</span>
      </div>
      <div className="flex items-center justify-center">
        <img className="rounded-full w-[300px] h-[300px]" src={profilePic2} />
      </div>
      <div className="flex items-center justify-center text-3xl font-bold p-6">
        Software Developer
      </div>
      <div className="flex items-center justify-center text-center p-6 text-xl pb-12">
        I'm a dedicated Computer Science graduate with a passion for coding and
        problem-solving, currently diving deep into JavaScript, React, and
        backend technologies through a Full Stack Developer course. I love
        crafting seamless web and cross-platform solutions and believe in the
        power of continuous learning and public sharing. With a creative
        approach to development, I’m always looking to blend innovation with
        effective problem-solving. As I navigate the ever-changing tech
        landscape, I’m excited to embrace new challenges and make a meaningful
        impact in the world of development.
      </div>
    </section>
  );
}

export default About;

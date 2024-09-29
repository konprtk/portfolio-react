import React from "react";

function Projects() {
  return (
    <section id="projects" className="bg-bgColor text-white pb-10 font-ubuntu">
      <div className="flex items-center justify-center p-20 text-6xl font-bold">
        My <span className="text-mainColor flex pl-4">Projects</span>
      </div>

      <div>
        <div className="flex justify-center items-center px-8">
          <div className="pb-6 px-8">
            <div className="border-solid border-2 border-mainColor rounded-lg p-4">
              <p className="font-bold text-2xl">Movies Explorer</p>
              <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                Movie Explorer is a React app for discovering popular films and
                managing a personal watchlist. It features a dynamic trending
                movie banner, a paginated movie list, and watchlist management.
                Built with React, Tailwind CSS, and Axios, it integrates with
                the TMDB API for real-time data.
              </p>
              <a
                href="https://github.com/konprtk/movieExplorer"
                target="_blank"
                className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
              >
                View Project on Github{" "}
              </a>
            </div>
          </div>
          <div className="pb-6 px-8">
            <div className="border-solid border-2 border-mainColor rounded-lg p-4">
              <p className="font-bold text-2xl">To-Do List</p>
              <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                To-Do List App is a sleek and functional application built with
                HTML, CSS, and JavaScript. It allows users to add, complete, and
                remove tasks, with all data saved to local storage for
                persistence across page reloads. Features include an easy-to-use
                interface for managing tasks and built-in support for task
                completion and removal. Explore the live demo or clone the
                repository to customize and deploy your own version.
              </p>
              <a
                href="https://github.com/konprtk/todo-list-app"
                target="_blank"
                className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
              >
                View Project on Github
              </a>
            </div>
          </div>
          <div className="pb-6 px-8">
            <div className="border-solid border-2 border-mainColor rounded-lg p-4">
              <p className="font-bold text-2xl">Apple Website Clone</p>
              <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                Apple Products Showcase is a React-based website that features a
                variety of Apple products, styled with Material-UI components.
                The site includes a dynamic home page, product sections, and
                individual product displays, all utilizing responsive design and
                custom animations.
              </p>
              <a
                href="https://github.com/konprtk/appleWebsiteClone"
                target="_blank"
                className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
              >
                View Project on Github{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8">
          <div className="pb-6 px-8">
            <div className="border-solid border-2 border-mainColor rounded-lg p-4">
              <p className="font-bold text-2xl">Chat App</p>
              <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                Chat App is a full-stack chat application built with MongoDB,
                Express.js, React.js, and Node.js, featuring real-time messaging
                via Socket.io. It includes JWT-based authentication, online user
                status monitoring, and global state management with Zustand.
                Styled with TailwindCSS and Daisy UI, the app is fully
                functional and deployed for free. Explore the live demo and
                experience seamless chat interactions and robust features.
              </p>
              <a
                href="https://github.com/konprtk/ChatApp"
                target="_blank"
                className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
              >
                View Project on Github{" "}
              </a>
            </div>
          </div>

          <div className="pb-6 px-8">
            <div className="border-solid border-2 border-mainColor rounded-lg p-4">
              <p className="font-bold text-2xl">Color Flipper</p>
              <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                Color Flipper is a playful web application that lets users
                generate random background colors with a single click. Designed
                to be both fun and educational, this project showcases basic
                JavaScript functionality and CSS styling. Easily integrate it
                into any web project or use it as a learning tool to explore
                color manipulation and DOM interaction. Check out the live demo
                or clone the repository to experiment with color generation and
                UI design.
              </p>
              <a
                href="https://github.com/konprtk/Color_Flipper"
                target="_blank"
                className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
              >
                View Project on Github{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8">
          <div className="flex justify-center items-center px-8">
            <div className="pb-6 px-8">
              <div className="border-solid border-2 border-mainColor rounded-lg p-4">
                <p className="font-bold text-2xl">Morse Code Translator</p>
                <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                  Morse Code Translator is a straightforward web application
                  that converts text to Morse code and vice versa. With a clean,
                  dark-themed interface, it offers an easy way to encode and
                  decode Morse code. Simply enter text or Morse code, click the
                  appropriate button, and view the results instantly. Explore
                  the functionality live or clone the repository to integrate it
                  into your own projects.
                </p>
                <a
                  href="https://github.com/konprtk/MorseCodeTranslator"
                  target="_blank"
                  className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
                >
                  View Project on Github{" "}
                </a>
              </div>
            </div>
            <div className="pb-6 px-8">
              <div className="border-solid border-2 border-mainColor rounded-lg p-4">
                <p className="font-bold text-2xl">URL Video Player</p>
                <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                  URL-Video-Player is a user-friendly web app that allows you to
                  play videos directly from any URL. With support for multiple
                  video formats and a responsive design, it provides a seamless
                  viewing experience. The player utilizes the Plyr library for
                  enhanced controls and customization. Simply paste a video link
                  and click "Play" to start watching. Check out the live demo or
                  clone the repository to integrate this functionality into your
                  projects.
                </p>
                <a
                  href="https://github.com/konprtk/URL-Video-Player"
                  target="_blank"
                  className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
                >
                  View Project on Github{" "}
                </a>
              </div>
            </div>
            <div className="pb-6 px-8">
              <div className="border-solid border-2 border-mainColor rounded-lg p-4">
                <p className="font-bold text-2xl">Web video Player</p>
                <p className="flex text-justify text-lg p-4 pt-4 text-gray-300">
                  Video Player Web App is a straightforward tool for uploading
                  and playing video files directly in your browser. It supports
                  various formats like MP4, WebM, and MKV and offers essential
                  playback controls such as play, pause, skip forward, and skip
                  backward. The modern dark-themed interface ensures a pleasant
                  viewing experience. Explore the live demo or clone the
                  repository, and start watching videos effortlessly with this
                  easy-to-use web application.
                </p>
                <a
                  href="https://github.com/konprtk/videoPlayerWebApp"
                  target="_blank"
                  className="flex justify-center items-center border-solid border-2 rounded-lg p-2 border-mainColor text-mainColor  hover:bg-mainColor hover:text-black font-bold"
                >
                  View Project on Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

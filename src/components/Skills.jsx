import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCss3,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJava,
  faLinux,
  faNode,
  faPython,
  faReact,
  faSquareGit,
  faSquareGithub,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <section id="skills" className="bg-secondBgColor text-white pb-10 font-ubuntu">
      <div className="flex items-center justify-center p-20 text-6xl font-bold">
        My <span className="flex pl-4 text-mainColor">Skills</span>
      </div>

      <div>
        <div className="flex items-center justify-center text-[125px] gap-40">
          <div>
            <FontAwesomeIcon className="text-[#F7DF1E]" icon={faSquareJs} />
            
          </div>
          <div>
            <FontAwesomeIcon className="text-[#61dbfb]" icon={faReact} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#68A063]" icon={faNode} />
          </div>
        </div>
        <div className="flex items-center justify-center text-[125px] gap-40">
          <div>
            <FontAwesomeIcon className="text-[#f89820]" icon={faJava} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#f06529]" icon={faHtml5} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#4584b6]" icon={faPython} />
          </div>

          <div>
            <FontAwesomeIcon className="text-[#EC4E1D]" icon={faGitAlt} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#fafbfc]" icon={faSquareGithub} />
          </div>
        </div>
        <div className="flex items-center justify-center text-[125px] gap-40">
          <div>
            <FontAwesomeIcon className="text-[#2965f1]" icon={faCss3} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#589636]" icon={faDatabase} />
          </div>
          <div>
            <FontAwesomeIcon className="text-[#fafbfc]" icon={faLinux} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

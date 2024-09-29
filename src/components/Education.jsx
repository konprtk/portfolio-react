import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";



function Education() {
  return (
    <section id="education" className="font-ubuntu bg-bgColor text-white">
      <div className="font-bold text-6xl flex items-center justify-center p-20">
        My <span className="pl-4 text-mainColor">Journey</span>
      </div>
      <div className="text-3xl px-36 pb-4 font-bold">Education</div>
      <div className="pb-6">
        <div className="px-36 border-solid border-2 border-mainColor rounded-lg p-8 ml-36 mr-36 pl-6 pt-4 pb-4">
          <p className="text-mainColor">
            <FontAwesomeIcon className="pr-2" icon={faCalendarDays} />
            2021 - 2024
          </p>
          <span className="font-bold text-xl">B.Sc. Computer Science - Dr. Babasaheb Ambedkar Marathwada
            University
          </span>
          <p>
            I have completed my Bachelor's of Science in Computer Science from
            BAMU University, Chhatrapati Sambhajinagar
          </p>
        </div>
      </div>
      <div className="pb-6">
        <div className="px-36 border-solid border-2 border-mainColor rounded-lg p-8 ml-36 mr-36 pl-6 pt-4 pb-4">
          <p className="text-mainColor">
            <FontAwesomeIcon className="pr-2" icon={faCalendarDays} />
            2019 - 2021
          </p>
          <span className="font-bold text-xl">12th (HSC) - MSBSHSE</span>
          <p>
            I have completed my 12th from Rameshwar College of Science,
            Bhokardan with state board Maharashtra State Board of Secondary and
            Higher Secondary Education
          </p>
        </div>
      </div>
      <div className="pb-16">
        <div className="px-36 border-solid border-2 border-mainColor rounded-lg p-8 ml-36 mr-36 pl-6 pt-4 pb-4">
          <p className="text-mainColor">
            <FontAwesomeIcon className="pr-2" icon={faCalendarDays} />
            2018 - 2019
          </p>
          <span className="font-bold text-xl">10th (SSC) - MSBSHSE</span>
          <p>
            I have completed my 10th from Shri. Shivaji Highschool, Chikhali with state board Maharashtra State Board of Secondary and Higher Secondary Education
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;

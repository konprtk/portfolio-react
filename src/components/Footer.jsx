import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="text-textColor bg-secondBgColor p-4 flex font-ubuntu justify-between items-center top-0 sticky z-50">
      <div className="text-[16px] pl-28">
        Copyright © 2024 by Pratik | All Rights Reserved
      </div>
      <a href='#home' className="flex mr-32 border-solid border-2 border-mainColor rounded-lg text-lg text-black  font-bold bg-mainColor hover:bg-secondBgColor hover:text-mainColor">
        <FontAwesomeIcon className='p-3' icon={faArrowUp} />
      </a>
    </section>
  );
}

export default Footer
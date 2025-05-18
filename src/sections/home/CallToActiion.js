'use client'; // Optional, if using with app router

import Image from 'next/image';
import Link from 'next/link';
import "../../css/home/CallToAction.css"
import React from 'react';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="w-full py-5 mt-20">
      <div className="max-w-[1300px] mx-auto h-full">
        <div className="flex flex-wrap justify-center items-center h-full">
          <div className="w-3/12 lg:w-full"></div>
          <div className="w-full md:w-9/12 lg:w-8/12 flex flex-col items-center lg:items-end justify-center">
            <div className="call-to-wrapper flex flex-col items-center justify-center gap-3 lg:gap-5">
              <div>
                <h2 className="m-0 p-0 sail text-3xl md:text-4xl">Hoodies That</h2>
                <h2 className="m-0 p-0 ms-5 sail text-3xl md:text-4xl">Speak Style</h2>
              </div>
              <a href="#" className="call-to-btn poppins text-base xl:text-xl">
                TALK WITH US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
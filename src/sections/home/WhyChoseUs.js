'use client'; // Optional, if using with app router

import Image from 'next/image';
import Link from 'next/link';
import "../../css/home/WhyChooseUs.css"

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full pt-5 my-10 p-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 px-0 pe-xl-4 mt-4">
            <div className="why-choose-content-wrapper flex gap-3 pe-xl-5">
              <div
                className="why-choose-icon"
                style={{ '--why-icon': 'url(/asset/images/why-choose/shipment.svg)' }}
              ></div>
              <div className="flex flex-col gap-2">
                <h6 className="m-0 p-0 montagu-slab text-lg">EASY PAYMENT METHOD</h6>
                <p className="m-0 p-0 poppins">
                  Shop with confidence using our secure and hassle-free payment options.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-0 px-xl-2 mt-4">
            <div className="why-choose-content-wrapper flex gap-3 ps-xl-4 pe-xl-5">
              <div
                className="why-choose-icon"
                style={{ '--why-icon': 'url(/asset/images/why-choose/support.svg)' }}
              ></div>
              <div className="flex flex-col gap-2">
                <h6 className="m-0 p-0 montagu-slab text-lg">24/7 CUSTOMER SERVICE</h6>
                <p className="m-0 p-0 poppins">
                  We're here for you anytime! Our dedicated support team is available 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-0 ps-xl-4 mt-4">
            <div className="why-choose-content-wrapper flex gap-3 ps-xl-5">
              <div
                className="why-choose-icon"
                style={{ '--why-icon': 'url(/asset/images/why-choose/money.svg)' }}
              ></div>
              <div className="flex flex-col gap-2">
                <h6 className="m-0 p-0 montagu-slab text-lg">MONEY-BACK GUARANTEE</h6>
                <p className="m-0 p-0 poppins">
                  Shop worry-free with our money-back guarantee. If you're not completely satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
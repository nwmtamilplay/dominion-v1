'use client';

import Image from 'next/image';
import Link from 'next/link';
import "../../css/home/offer.css"

const OfferSection = () => {
  return (
    <section id="offer-section" className="w-full pt-5 mt-5 overflow-hidden px-3">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="box-wrapper flex poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="flex flex-col items-center justify-end pb-5 bg-cover bg-center"
                style={{ '--offer-bg': 'url(/asset/images/dress/OF-1.png)' }}
              >
                <div className="offer-tag font-bold flex flex-col justify-center items-center pt-2">
                  <p className="m-0 p-0">SPECIAL</p>
                  OFFER
                </div>
                <div className="offer-image-content flex flex-col gap-2 items-center">
                  <h1 className="m-0 p-0 font-bold text-center text-3xl">Sale Up To 30%</h1>
                  <h5 className="text-center text-lg">Latest Hoodies Collection</h5>
                  <a href="#" className="font-bold">
                    VIEW MORE
                  </a>
                </div>
              </div>
              <div
                className="flex flex-col pt-4 ps-4 bg-cover bg-center"
                style={{ '--offer-bg': 'url(/asset/images/dress/d-3.png), url(/asset/images/dress/of-2.png)' }}
              >
                <div className="offer-image-content flex flex-col gap-2">
                  <h1 className="m-0 p-0 font-bold text-5xl">Trendy Picks</h1>
                  <h4 className="text-2xl">Latest Hoodies Collection</h4>
                  <a href="#" className="font-bold">
                    VIEW MORE
                  </a>
                </div>
              </div>
              <div
                className="bg-cover bg-center"
                style={{ '--offer-bg': 'url(/asset/images/dress/of-4.png)' }}
              ></div>
              <div
                className="flex flex-col pt-4 ps-3 md:ps-4 bg-cover bg-center"
                style={{ '--offer-bg': 'url(/asset/images/dress/of-3.png)' }}
              >
                <div className="offer-image-content flex flex-col gap-2">
                  <h1 className="m-0 p-0 font-bold text-3xl">
                    Always In <br /> Trend
                  </h1>
                  <a href="#" className="font-bold">
                    VIEW MORE
                  </a>
                </div>
              </div>
              <div
                className="flex items-center ps-4 bg-cover bg-center"
                style={{ '--offer-bg': 'url(/asset/images/dress/HOODY-2.png), url(/asset/images/dress/of-5.png)' }}
              >
                <div className="offer-image-content flex flex-col gap-2">
                  <h1 className="m-0 p-0 font-bold text-5xl">30% Discount</h1>
                  <h4 className="text-2xl">Latest Hoodies Collection</h4>
                  <a href="#" className="font-bold">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
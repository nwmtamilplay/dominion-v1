'use client'; // Optional, if using with app router

import Image from 'next/image';
import Link from 'next/link';
import "../../css/home/TopProducts.css"
import React, { useState } from 'react';

const OurCollection = () => {
  const [activeTab, setActiveTab] = useState('hoodies');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample product data (replace with your actual data or API)
  const products = {
    't-shirts': [
      { id: 1, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-1.png', bgColor: '#D79090', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 2, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-2.png', bgColor: '#F7C967', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 3, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-3.png', bgColor: '#50C2D3', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 4, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-4.png', bgColor: '#AC94CA', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 5, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-1.png', bgColor: '#D79090', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 6, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-2.png', bgColor: '#F7C967', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 7, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-3.png', bgColor: '#50C2D3', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 8, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-4.png', bgColor: '#AC94CA', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
    ],
    hoodies: [
      { id: 9, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-1.png', bgColor: '#D79090', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 10, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-2.png', bgColor: '#F7C967', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 11, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-3.png', bgColor: '#50C2D3', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 12, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-4.png', bgColor: '#AC94CA', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 13, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-1.png', bgColor: '#D79090', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 14, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-2.png', bgColor: '#F7C967', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 15, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-3.png', bgColor: '#50C2D3', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
      { id: 16, name: 'BLACKY HALLS', price: '₹180.00', originalPrice: '₹250.00', rating: 4.5, image: '/asset/images/dress/d-4.png', bgColor: '#AC94CA', colors: ['#46048C', '#C9BF00', '#EA7D00', '#029C73', '#06ABBA'] },
    ],
  };

  return (
    <section id="our-collection" className="w-full pt-5 mt-10 px-3">
      <div className="max-w-[1300px] mx-auto py-3 my-3">
        <div className="flex flex-wrap mb-20">
          <div className="w-full">
            <div className="top-products-bar flex justify-between">
              <h5 className="m-0 p-0 font-bold py-1 montagu-slab text-lg">Our Collections</h5>
              <div className="tabs-wrapper flex gap-3">
                <p
                  className={`m-0 p-0 py-1 px-2 tab-link-col montagu-slab cursor-pointer ${activeTab === 't-shirts' ? 'active' : ''}`}
                  onClick={() => handleTabClick('t-shirts')}
                >
                  SHIRTS
                </p>
                <p
                  className={`m-0 p-0 py-1 px-2 tab-link-col montagu-slab cursor-pointer ${activeTab === 'hoodies' ? 'active' : ''}`}
                  onClick={() => handleTabClick('hoodies')}
                >
                  HOODIES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap my-5 t-shirts tab-content-col ${activeTab === 't-shirts' ? 'active block' : 'hidden'}`}>
          {products['t-shirts'].map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 md:px-5 mb-3 lg:my-5">
              <div className="top-products-wrapper flex md:block p-2">
                <div
                  className="top-image-wrapper relative flex justify-center py-0 md:py-3"
                  style={{ '--img-bg-clr': product.bgColor }}
                >
                  <div className="heart-float-btn-wrapper flex justify-center items-center">
                    <div className="heart-float-btn"></div>
                  </div>
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                </div>
                <div className="products-info mt-0 md:mt-3 ps-3 py-1 md:px-0 flex flex-col md:block t">
                  <div className="product-name flex justify-between items-center">
                    <h5 className="m-0 p-0 font-bold montagu-slab text-lg">{product.name}</h5>
                    <div className="star-ratings flex items-center gap-1 poppins">
                      <div className="star"></div>
                      {product.rating}
                    </div>
                  </div>
                  <div className="product-amount flex gap-3 mt-2 poppins">
                    <h6 className="m-0 p-0">{product.price}</h6>
                    <h6 className="m-0 p-0 text-black line-through">{product.originalPrice}</h6>
                  </div>
                  <div className="available-colors mt-2 flex justify-between items-center poppins">
                    <div className="colors-heading font-bold">Available colours</div>
                    <div className="color-options flex" style={{ gap: '2px' }}>
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="color-circle"
                          style={{ '--color-option': color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="buy-btn-wrapper flex md:mt-3 justify-between items-center mt-auto poppins">
                    <a href="#" className="buy-btn font-bold flex items-center justify-center">
                      Buy Now
                    </a>
                    <div className="function-btn-wrapper flex gap-2 items-center">
                      <div className="heart-btn"></div>
                      <div className="cart-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex flex-wrap my-5 hoodies tab-content-col ${activeTab === 'hoodies' ? 'active block' : 'hidden'}`}>
          {products.hoodies.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 md:px-5 mb-3 lg:my-5">
              <div className="top-products-wrapper flex md:block p-2">
                <div
                  className="top-image-wrapper relative flex justify-center py-0 md:py-3"
                  style={{ '--img-bg-clr': product.bgColor }}
                >
                  <div className="heart-float-btn-wrapper flex justify-center items-center">
                    <div className="heart-float-btn"></div>
                  </div>
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                </div>
                <div className="products-info mt-0 md:mt-3 ps-3 py-1 md:px-0 flex flex-col md:block t">
                  <div className="product-name flex justify-between items-center">
                    <h5 className="m-0 p-0 font-bold montagu-slab text-lg">{product.name}</h5>
                    <div className="star-ratings flex items-center gap-1 poppins">
                      <div className="star"></div>
                      {product.rating}
                    </div>
                  </div>
                  <div className="product-amount flex gap-3 mt-2 poppins">
                    <h6 className="m-0 p-0">{product.price}</h6>
                    <h6 className="m-0 p-0 text-black line-through">{product.originalPrice}</h6>
                  </div>
                  <div className="available-colors mt-2 flex justify-between items-center poppins">
                    <div className="colors-heading font-bold">Available colours</div>
                    <div className="color-options flex" style={{ gap: '2px' }}>
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="color-circle"
                          style={{ '--color-option': color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="buy-btn-wrapper flex md:mt-3 justify-between items-center mt-auto poppins">
                    <a href="#" className="buy-btn font-bold flex items-center justify-center">
                      Buy Now
                    </a>
                    <div className="function-btn-wrapper flex gap-2 items-center">
                      <div className="heart-btn"></div>
                      <div className="cart-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
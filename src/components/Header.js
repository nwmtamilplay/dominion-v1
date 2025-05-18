'use client';
import "../css/header.css";
import Image from 'next/image';
import BackgroundImage from "@/components/BackgroundImage";
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Header() {
    return (
        <header className='w-full flex-col flex justify-center items-center shadow montagu-slab bg-white'>
            <div className='taoBar w-full bg-blue-900 text-white flex justify-center items-center px-3'>
                <div className='w-full max-w-[1300px] flex justify-between items-center p-2'>
                    <p className='text-xs'>30% DISCOUNT FOR EVERY ORDER</p>
                    <ul className='xl:flex justify-center gap-3 items-center text-xs hidden '>
                        <a href='#' className='hover:text-yellow-300'>REGISTER</a>
                        <a href='#' className='hover:text-yellow-300'>LOGIN</a>
                        <a href='#' className='hover:text-yellow-300'>SHOPPING CART</a>
                        <a href='#' className='hover:text-yellow-300'>OFFER</a>
                    </ul>
                </div>
            </div>
            <nav className='w-full max-w-[1300px] px-3'>
                <div className='heade_middle py-5 flex items-center'>
                    <Image
                        className='me-20'
                        src="\logo-light.svg"
                        alt="Dominion"
                        width={200}
                        height={80}
                    />
                    <div className='searh-fiels border-2 border-blue-900 rounded-3xl xl:flex items-center gap-3 text-sx hidden'>
                        <div className='px-3 border-r-2 border-blue-900'>
                            <select className='min-w-40 text-gray-700 focus:outline-none focus:ring-none text-sx uppercase'>
                                <option className='uppercase' value={"heelo"}>All Categoies</option>
                                <option className='uppercase' value={"heelo"}>Hoody</option>
                                <option className='uppercase' value={"heelo"}>T-Shirt</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder='Search for Products'
                            className="min-w-50 text-sx px-4  text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <button className="cursor-pointer bg-blue-900 rounded-br-3xl rounded-tr-3xl px-6 py-2">
                            <BackgroundImage
                                img="/svg-icons/search.svg"
                                width="1.5rem"
                                height="1.5rem"
                                color='white'
                            />
                        </button>
                    </div>
                    <Button theme="signup" cls="ms-auto hidden xl:flex text-xs py-2 px-5 me-4">
                        Sign Up
                    </Button>
                    <Button cls="text-xs py-3 px-5 hidden xl:flex">
                        Sign In
                    </Button>
                </div>
                <div className='w-full gap-5 flex xl:items-center py-3 header-munus xl:px-0 px-10 xl:shadow-none shadow-2xl justify-center xl:justify-start'>
                    <ul className='flex xl:flex-row flex-col gap-10 xl:items-center text-sm xl:me-auto uppercase xl:py-0 py-5'>
                        <li>
                            <a href='#' className='hover:text-blue-900'>Home</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-blue-900  md:hover:b'>About</a>
                        </li>
                        <li className="relative group/product">
                            <a href="#" className="hover:text-blue-900 flex gap-1 items-center">Products <BackgroundImage
                                img="/svg-icons/drop-down.svg"
                                width="1.5em"
                                height="1.5em"
                                color='#1c398e'
                            /></a>
                            <ul className="transition duration-[750ms] ease-in-out translate-y-2.5 group-hover/product:translate-y-0 xl:pointer-events-none pointer-events-auto group-hover/product:pointer-events-auto xl:opacity-0 xl:group-hover/product:opacity-100 xl:absolute static left-0 xl:top-12 w-40 bg-white border-gray-200 rounded-md shadow-md xl:before:content-[''] before:absolute before:bottom-[100%] before:left-1 before:w-full before:h-8 opacity-100 ">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-blue-900 hover:text-white text-gray-700">Product 1</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-blue-900 hover:text-white text-gray-700">Product 2</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-blue-900 hover:text-white text-gray-700">Product 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#' className='hover:text-blue-900'>Contact</a>
                        </li>
                    </ul>
                    <div className='header-icons flex items-center gap-3'>
                        <button className="cursor-pointer">
                            <BackgroundImage
                                img="/svg-icons/heart.svg"
                                width="1.5rem"
                                height="1.5rem"
                                color='black'
                            />
                        </button>
                        <button className="cursor-pointer">
                            <BackgroundImage
                                img="/svg-icons/cart.svg"
                                width="1.5rem"
                                height="1.5rem"
                                color='black'
                            />
                        </button>
                        <button className="cursor-pointer">
                            <BackgroundImage
                                img="/svg-icons/profile.svg"
                                width="1.5rem"
                                height="1.5rem"
                                color='black'
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

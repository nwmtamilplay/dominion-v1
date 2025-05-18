'use client';
import Image from 'next/image';
import BackgroundImage from '@/components/BackgroundImage';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter signup logic
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-blue-900 text-white montagu-slab">
      <div className="max-w-[1300px] mx-auto py-8 px-4 xl:px-0 pt-20">
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 xl:w-1/4">
          
            <Image
              src="/logo-dark.svg"
              alt="Dominion"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="poppins text-sm">
              Your one-stop shop for stylish hoodies and t-shirts. Discover quality and comfort with our exclusive collections.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 xl:w-1/5">
            <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="poppins text-sm space-y-2">
              <li><a href="#" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300">About</a></li>
              <li><a href="#" className="hover:text-yellow-300">Products</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 xl:w-1/5">
            <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
            <ul className="poppins text-sm space-y-2">
              <li>Email: <a href="mailto:support@dominion.com" className="hover:text-yellow-300">support@dominion.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-yellow-300">+1 (234) 567-890</a></li>
              <li>Address: 123 Fashion St, Style City, SC 12345</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/3 xl:w-1/4">
            <h3 className="text-lg font-bold mb-4 uppercase">Newsletter</h3>
            <p className="poppins text-sm mb-4">Subscribe to get the latest updates and offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 max-w-[150px] px-4 py-2 text-white poppins text-sm rounded-l-3xl focus:outline-none border-2 boder-white"
                required
              />
              <button
                type="submit"
                className="bg-yellow-300 text-blue-900 px-4 py-2 rounded-r-3xl poppins text-sm font-bold hover:bg-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-600">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:opacity-80">
              <BackgroundImage
                img="/svg-icons/facebook.svg"
                width="1.5rem"
                height="1.5rem"
                color="white"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <BackgroundImage
                img="/svg-icons/twitter.svg"
                width="1.5rem"
                height="1.5rem"
                color="white"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <BackgroundImage
                img="/svg-icons/instagram.svg"
                width="1.5rem"
                height="1.5rem"
                color="white"
              />
            </a>
          </div>
          <p className="poppins text-sm">&copy; {new Date().getFullYear()} Dominion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

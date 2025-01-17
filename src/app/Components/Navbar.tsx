"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch, FiHeart, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-lg">
      {/* Announcement Bar */}
      <div className="bg-indigo-600">
        <div className="container mx-auto px-4 py-2 text-center text-white text-sm font-medium tracking-wider">
          🌟 Limited Time Offer: 20% Off All New Arrivals | Free Returns 🌟
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold">
            LUXE<span className="text-indigo-600">MART</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-5 py-2.5 rounded-lg bg-gray-100 border-2 border-gray-100 focus:border-indigo-600 focus:outline-none transition-all duration-300"
              />
              <button className="absolute right-2 top-2.5 p-1 hover:text-indigo-600 transition-colors">
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/become-seller" 
              className="hidden md:block px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Start Selling
            </Link>
            <Link 
              href="/become-seller" 
              className="md:hidden px-4 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Sell
            </Link>
            <Link href="/wishlist" className="hidden md:flex items-center hover:text-indigo-600 transition-colors">
              <div className="relative">
                <FiHeart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold min-w-[18px] text-center">
                  0
                </span>
              </div>
            </Link>
            <Link href="/cart" className="flex items-center">
              <div className="relative hover:text-indigo-600 transition-colors">
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full px-1.5 py-0.5 text-xs font-bold min-w-[18px] text-center">
                  0
                </span>
              </div>
            </Link>
            <Link href="/account" className="hidden md:flex items-center hover:text-indigo-600 transition-colors">
              <FiUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Menu */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center justify-center space-x-8 h-12 text-sm font-medium">
            {['New In', 'Women', 'Men', 'Kids', 'Beauty', 'Home', 'Brands'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sale" className="text-rose-600 font-bold hover:text-rose-700 transition-colors">
                SALE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/" className="text-2xl font-extrabold">
              LUXE<span className="text-indigo-600">MART</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-6 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-5 py-3 rounded-lg bg-gray-100 border-2 border-gray-100 focus:border-indigo-600 focus:outline-none"
              />
              <button className="absolute right-2 top-3 p-1 hover:text-indigo-600 transition-colors">
                <FiSearch className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              {/* Account Links */}
              <div className="flex flex-col space-y-4">
                <Link href="/account" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
                  <FiUser className="h-5 w-5" />
                  <span>My Account</span>
                </Link>
                <Link href="/wishlist" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
                  <FiHeart className="h-5 w-5" />
                  <span>Wishlist</span>
                </Link>
              </div>

              {/* Main Navigation */}
              <ul className="space-y-1">
                {['New In', 'Women', 'Men', 'Kids', 'Beauty', 'Home', 'Brands'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`} 
                      className="block px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/sale" 
                    className="block px-4 py-3 text-rose-600 font-bold hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    SALE
                  </Link>
                </li>
              </ul>

              {/* Start Selling Button */}
              <Link 
                href="/become-seller" 
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

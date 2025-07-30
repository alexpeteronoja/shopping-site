import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import useCartStore from '../stores/CartStore';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  const { totalItems } = useCartStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
      <nav className=" shadow ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Button (Mobile) */}
            <div id="menu-button" className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Navigation Links (Desktop) */}

            <div className="hidden md:flex">
              <Link
                to="/"
                className="block  hover:text-blue-500 mr-3 heading font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block  hover:text-blue-500 mx-3 heading"
              >
                About
              </Link>
              <Link
                to="/"
                state={{ scrollTo: 'project-section' }}
                className="block  hover:text-blue-500 mx-3 heading"
              >
                Project
              </Link>
              <Link
                to="/cart"
                className="block  hover:text-blue-500 ml-3 heading"
              >
                Contact
              </Link>
            </div>

            {/* Logo */}
            <div className="text-xl font-bold">
              <Link to="/">
                <img
                  src="/images/dark-logo.webp"
                  alt=""
                  className="w-36 h-10"
                />
              </Link>
            </div>

            {/* Order side) */}
            <div className="hidden md:flex space-x-6">
              <img src="/images/account-logo.svg" alt="" />
              <img src="/images/search.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <div
                onClick={() => setisCartOpen(!isCartOpen)}
                className="relative cursor-pointer"
              >
                <span>
                  <img src="/images/cart.svg" alt="" />
                </span>

                {totalItems() !== 0 && (
                  <span className="absolute bottom-2 left-4 small-no-nav">
                    {totalItems()}
                  </span>
                )}
              </div>
            </div>

            {/* Order side Mobile */}

            <div className="flex md:hidden space-x-6">
              <img src="/images/search.svg" alt="" />
              <div
                onClick={() => setisCartOpen(!isCartOpen)}
                className="relative cursor-pointer"
              >
                <span>
                  <img src="/images/cart.svg" alt="" />
                </span>

                {totalItems() !== 0 && (
                  <span className="absolute bottom-2 left-3.5 small-no-nav">
                    {totalItems()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && ( */}
        <div>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed md:hidden bg-black opacity-50 inset-0 z-10"
            ></div>
          )}

          <div
            id="mobile-sidebar"
            className={`md:hidden side-navbar ${isOpen ? 'show' : ''} w-64`}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 mb-2 flex justify-end cursor-pointer "
              >
                <i className="fa-solid fa-xmark fa-lg "></i>
              </button>
            </div>

            <Link to="/" className="block  hover:text-blue-500 py-3">
              Home
            </Link>
            <Link to="/about" className="block  hover:text-blue-500  py-3">
              About
            </Link>
            <Link
              to="/"
              state={{ scrollTo: 'project-section' }}
              className="block  hover:text-blue-500  py-3"
            >
              Project
            </Link>
            <Link to="/contact" className="block  hover:text-blue-500  py-3">
              Contact
            </Link>
          </div>
        </div>
        {/* )} */}

        {/* Cart  */}
        <div>
          {isCartOpen && (
            <div
              onClick={() => setisCartOpen(false)}
              className="fixed bg-black opacity-50 inset-0 z-10"
            ></div>
          )}

          <div
            className={`cart-bar ${isCartOpen ? 'show' : ''} w-[450px] max-w-[90%]`}
          >
            <div className="flex justify-end px-5 pt-10">
              <button
                onClick={() => setisCartOpen(false)}
                className="mb-2 flex justify-end cursor-pointer "
              >
                <i className="fa-solid fa-xmark fa-lg "></i>
              </button>
            </div>

            <Cart />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

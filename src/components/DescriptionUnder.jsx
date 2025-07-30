import { useState } from 'react';

function DescriptionUnder() {
  const [openSections, setOpenSections] = useState([
    false,
    false,
    false,
    false,
  ]);

  function toggleSection(index) {
    setOpenSections(prev =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-y-10 px-4 md:px-10 text-[#666] bg-[#f5f5f5] pt-15 pb-10.5 text-base">
        <div>
          <div
            onClick={() => toggleSection(0)}
            className="pb-6  text-black font-medium cursor-pointer md:cursor-text flex justify-between"
          >
            <span>Company</span>
            <span className="sm:hidden">
              {openSections[0] ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>

          <div
            className={`transition-all duration-200 overflow-hidden md:block  ${openSections[0] ? 'max-h-full mb-5' : 'max-h-0'} sm:max-h-full sm:mb-0`}
          >
            <div className="space-y-2.5 pb-6">
              <div>Find a location nearest you.</div>
              <div>See Our Stores</div>
            </div>

            <div className="space-y-2.5">
              <div>
                <a href="tel:+3913525684593">+391 (0)35 2568 4593</a>
              </div>
              <div>
                <a href="mailto:hello@domain.com">hello@domain.com</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            onClick={() => toggleSection(1)}
            className="pb-6  text-black font-medium cursor-pointer md:cursor-text flex justify-between"
          >
            <span>Information</span>
            <span className="sm:hidden">
              {openSections[1] ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>

          <div
            className={`transition-all duration-200 overflow-hidden ${openSections[1] ? 'max-h-full mb-5' : 'max-h-0'} sm:max-h-full sm:mb-0`}
          >
            <div className="space-y-2.5">
              <div>My Account</div>
              <div>Login</div>
              <div>My Cart</div>
              <div>Wishlist</div>
              <div>Checkout</div>
            </div>
          </div>
        </div>

        <div>
          <div
            onClick={() => toggleSection(2)}
            className="pb-6  text-black font-medium cursor-pointer md:cursor-text flex justify-between"
          >
            <span>Services</span>
            <span className="sm:hidden">
              {openSections[2] ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>

          <div
            className={`transition-all duration-300 overflow-hidden ${openSections[2] ? 'max-h-full mb-5' : 'max-h-0'} sm:max-h-full sm:mb-0`}
          >
            <div className="space-y-2.5">
              <div>About Us</div>
              <div>Careers</div>
              <div>Delivery Inforamtion</div>
              <div>Privacy Policy</div>
              <div>Terms & Condition</div>
            </div>
          </div>
        </div>

        <div>
          <div
            onClick={() => toggleSection(3)}
            className="pb-6 text-black font-medium cursor-pointer md:cursor-text flex justify-between"
          >
            <span>Subscribe</span>
            <span className="sm:hidden">
              {openSections[3] ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>

          <div
            className={`transition-all duration-300 overflow-hidden ${openSections[3] ? 'max-h-full mb-5' : 'max-h-0'} sm:max-h-full sm:mb-0`}
          >
            <div className="pb-6">
              Enter your email below to be the first to know about new
              collections and product launches.
            </div>

            <div className="relative text-black">
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-3.5 px-10 bg-white w-full outline-0"
                />
              </div>
              <button className="absolute top-3.5 right-3 cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <div className="absolute top-3.5 left-3">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionUnder;

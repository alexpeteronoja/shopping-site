import DescriptionUnder from './DescriptionUnder';

function Footer() {
  return (
    <>
      {/* Additional Benefit */}
      <div className="border-t-1">
        <div className="grid grid-cols-4 space-x-6 my-9.5 mx-5 md:mx-10">
          <div className="flex gap-x-4 gap-y-3 flex-col md:flex-row items-center">
            <div>
              <img src="/images/icon_box_free_ship.png" alt="" />
            </div>
            <div>
              <p className="text-center md:text-start text-base md:text-xl md:font-medium mb-1">
                Free Shipping
              </p>
              <p className="text-base text-[#777] hidden md:inline-block">
                Free Shipping for orders over £130
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col md:flex-row items-center">
            <div>
              <img src="/images/icon_box_money_guarantee.png" alt="" />
            </div>
            <div>
              <p className="text-center md:text-start text-base md:text-xl md:font-medium mb-1">
                Money Guarantee
              </p>
              <p className="text-base text-[#777] hidden md:inline-block">
                Within 30 days for an exchange.
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col md:flex-row items-center">
            <div>
              <img src="/images/icon_box_support.png" alt="" />
            </div>
            <div>
              <p className="text-center md:text-start text-base md:text-xl md:font-medium mb-1">
                Online Support
              </p>
              <p className="text-base text-[#777] hidden md:inline-block">
                24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col md:flex-row items-center">
            <div>
              <img src="/images/icon_box_payment.png" alt="" />
            </div>
            <div>
              <p className="text-center md:text-start text-base md:text-xl md:font-medium mb-1">
                Flexible Payment
              </p>
              <p className="text-base text-[#777] hidden md:inline-block">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upper Footer */}

      <DescriptionUnder />

      {/* Bottom Footer */}

      <div className="px-5 md:px-10 py-5.5 border-t-1 bg-[#f5f5f5] flex flex-col md:flex-row gap-x-2.5 items-center md:items-start md:justify-between">
        <div>
          <img src="/images/payment.png" alt="" />
        </div>

        <div className="my-6 md:my-0">© minimog 2024</div>

        <div className="flex">
          <div>
            <i className="fa-brands fa-pinterest-p mx-5.5"></i>
          </div>
          <div>
            <i className="fa-brands fa-facebook-f mx-5.5"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram mx-5.5"></i>
          </div>
          <div>
            <i className="fa-brands fa-x-twitter mx-5.5"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

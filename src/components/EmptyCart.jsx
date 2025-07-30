import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <div className="text-center">
        <div className="mb-7.5">
          <img
            src="/images/empty-cart.webp"
            alt=""
            className={`w-full  max-w-[350px] mx-auto`}
          />
        </div>

        <div>
          <p className="text-3xl font-medium mb-4.5">
            Your cart is currently empty.
          </p>
          <p className="mb-7.5">
            You may check out all the available products and buy some in the
            shop.
          </p>

          <div className="overflow-hidden mt-2.5 mb-10">
            <Link to="/">
              <button className="border px-7 rounded-md hover:rounded-lg cursor-pointer bg-black text-white w-full max-w-[175px] h-11 transform transition-all duration-200 hover:scale-125">
                Return to shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;

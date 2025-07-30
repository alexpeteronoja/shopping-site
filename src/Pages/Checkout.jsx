import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import useCartStore from '../stores/CartStore';
import Footer from '../components/Footer';
import EmptyCart from '../components/EmptyCart';

function Checkout() {
  const {
    cart,
    // removeFromCart,
    // updateQuantity,
    // clearCart,
    // totalItems,
    totalPrice,
  } = useCartStore();
  return (
    <div className="">
      <Navbar />

      <h1 className="text-center mt-7 text-4xl">Checkout</h1>

      <div className="mt-13 mx-5 md:mx-10">
        {cart.length === 0 ? (
          <div>{<EmptyCart />}</div>
        ) : (
          <div>
            <p className="mb-4">Returning customer? Click here to login</p>

            <div className="grid md:grid-cols-[3fr_2fr] md:gap-x-13">
              <div>
                <h3 className="mb-5 text-2xl">Billing Details</h3>

                <Signup />
              </div>

              <div>
                <h3 className="mb-5 text-2xl">Order summary</h3>

                <div>
                  <table className="w-full shopping-checkout">
                    {cart.map(item => (
                      <tr>
                        <td>
                          <div className="flex gap-x-4">
                            <div>
                              <img
                                src={item.image.image1}
                                alt=""
                                className="max-w-15"
                              />
                            </div>

                            <div>
                              <div className="font-medium">
                                {item.title}
                                <span className="text-[#9b9b9b] ms-2">
                                  x{item.quantity}
                                </span>
                              </div>
                              <p className="my-1">
                                <span className="font-medium">Size:</span> M
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="font-normal text-end">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td>Subtotal</td>
                      <td className="font-medium text-lg">${totalPrice()}</td>
                    </tr>

                    <tr>
                      <td>Shipping</td>
                      <td>
                        Flat rate: <span className="font-medium">$10.00</span>
                      </td>
                    </tr>

                    <tr className="font-medium">
                      <td>Total</td>
                      <td className="text-2xl">${totalPrice() + 10}</td>
                    </tr>
                  </table>

                  <div className="border-t-1 border-[#eee] py-2.5">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </div>

                  <div className="overflow-hidden mt-2.5">
                    <a href="">
                      <button className="border px-7 rounded-md hover:rounded-lg cursor-pointer bg-black text-white w-full h-11 transform transition-all duration-200 hover:scale-125">
                        Place order
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-25">
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;

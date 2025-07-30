import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useCartStore from '../stores/CartStore';
import EmptyCart from '../components/EmptyCart';

function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    // clearCart,
    // totalItems,
    totalPrice,
  } = useCartStore();

  return (
    <div>
      <Navbar />

      <h1 className="text-center mt-7 text-4xl">Shopping Cart</h1>

      <div className="mt-13 mx-5 md:mx-10">
        {cart.length === 0 ? (
          <div>{<EmptyCart />}</div>
        ) : (
          <div>
            <p className="text-2xl text-center mb-10">
              Check Your Cart and Proceed to Checkout
            </p>

            <table className="w-full cart-table">
              <tr className="border-b-1 hidden md:table-row">
                <th className="cart-header">Product</th>
                <th className="cart-header">Price</th>
                <th className="cart-header">Quantity</th>
                <th className="cart-header">Subtotal</th>
              </tr>
              {cart.map(item => (
                <tr>
                  <td>
                    <div className="flex gap-x-5">
                      <div>
                        <img
                          src={item.image.image1}
                          alt=""
                          className="w-full max-w-27.5"
                        />
                      </div>

                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="my-1">
                          <span className="font-medium">Size:</span> M
                        </p>

                        <div className="flex items-center gap-5">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>

                        {/* This Part contain the price and Update feature which is hidden in Tablet and Desktop */}

                        <div className="md:hidden">
                          <div className="relative max-w-[108px] my-2.5">
                            <div className="">
                              <input
                                type="number"
                                className=" px-10 bg-[#f1f1f1] outline-0 rounded-md w-full h-10 text-center"
                                value={item.quantity}
                                onChange={e =>
                                  updateQuantity(
                                    item.id,
                                    parseInt(e.target.value)
                                  )
                                }
                              />
                            </div>
                            <div
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  parseInt(Math.max(1, item.quantity - 1))
                                )
                              }
                              className="absolute top-2 left-3 cursor-pointer"
                            >
                              <i className="fa-solid fa-minus"></i>
                            </div>
                            <div
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  parseInt(item.quantity + 1)
                                )
                              }
                              className="absolute top-2 right-4 cursor-pointer"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          </div>

                          <div className="mt-3">
                            Subtotal :{' '}
                            <span className="font-medium">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* This Part is the other end of the Table which is hidden in Mobile */}

                  <td className="hidden md:table-cell">${item.price}</td>

                  <td className="hidden md:table-cell">
                    <div className="relative max-w-[105px]">
                      <div className="">
                        <input
                          type="number"
                          className=" px-10 bg-[#f1f1f1] outline-0 rounded-md w-full max-w-[105px] h-10 text-center"
                          value={item.quantity}
                          onChange={e =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            parseInt(Math.max(1, item.quantity - 1))
                          )
                        }
                        className="absolute top-2 left-3 cursor-pointer"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <div
                        onClick={() =>
                          updateQuantity(item.id, parseInt(item.quantity + 1))
                        }
                        className="absolute top-2 right-4 cursor-pointer"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </td>

                  <td className="hidden md:table-cell">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </table>

            <div className="mt-12.5 flex justify-center md:justify-end">
              <div className="w-full md:w-[400px] p-7.5 shadow-lg">
                <div>
                  <table className="w-full checkout-table checkout-page-border">
                    <tr>
                      <td>Subtotal</td>
                      <td>${totalPrice()}</td>
                    </tr>

                    <tr>
                      <td>Shipping</td>
                      <td>
                        <span className="font-normal">Flat rate:</span> $10.00
                      </td>
                    </tr>

                    <tr>
                      <td>Total</td>
                      <td>${totalPrice() + 10}</td>
                    </tr>
                  </table>

                  <div className="overflow-hidden mt-2.5">
                    <a href="">
                      <button className="border px-7 rounded-md hover:rounded-lg cursor-pointer bg-black text-white w-full h-11 transform transition-all duration-200 hover:scale-125">
                        Checkout
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

export default CartPage;

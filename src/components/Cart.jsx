import { Link } from 'react-router-dom';
import useCartStore from '../stores/CartStore';
import EmptyRealCart from './EmptyRealCart';
function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    // clearCart,
    // totalItems,
    totalPrice,
  } = useCartStore();

  // const [itemNo, setItemNo] = useState(0);

  // function handleItemNo(event, itemId) {
  //   const value = event.target.value;
  //   setItemNo(value);
  //   updateQuantity(itemId);
  // }

  // function handleIncrement(value) {
  //   if (value === 'decrease') {
  //     setItemNo(prev => Math.max(1, prev - 1));
  //   } else if (value === 'increase') {
  //     setItemNo(prev => prev + 1);
  //   }
  // }

  console.log(cart);
  return (
    <>
      <div>
        <div className="px-5">
          <p className="text-2xl font-medium mb-6">Shopping Cart</p>

          {/* <p className="mb-8">
            These products are limited, checkout within 03m 36s Buy $187.00 more
            to enjoy FREE Shipping
          </p> */}
        </div>

        {cart.length === 0 ? (
          <div className="px-5">
            <EmptyRealCart />
          </div>
        ) : (
          <div>
            <div className="space-y-9 px-5 min-h-[400px]">
              {cart.map(item => (
                <div>
                  <div className="flex gap-x-4">
                    <div>
                      <img
                        src={item.image.image1}
                        alt=""
                        className="max-w-22"
                      />
                    </div>

                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="my-1">
                        <span className="font-medium">Size:</span> M
                      </p>

                      <p className="mb-2.5">${item.price * item.quantity}</p>

                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="">
                            <input
                              type="number"
                              className=" px-10 bg-[#f1f1f1] outline-0 rounded-md w-full max-w-[105px] h-10 text-center"
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

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2.5 pb-7.5 px-5 mt-5 bg-[#f7f7f7]">
              <div>
                <table className="w-full checkout-table">
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
                  <a href="/checkout">
                    <button className="border px-7 rounded-md hover:rounded-lg cursor-pointer bg-black text-white w-full h-11 transform transition-all duration-200 hover:scale-125">
                      Checkout
                    </button>
                  </a>
                </div>

                <div className="text-center mt-2.5">
                  <Link
                    to="/cart"
                    className="text-black font-medium relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductData from '../data/ProductData';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';

import RelatedProduct from '../components/RelatedProduct';
import useCartStore from '../stores/CartStore';

function ProductItem() {
  // const addQuantity = useCartStore(state => state.addToCart);
  const { addQuantity } = useCartStore();
  const { id } = useParams();
  const product = ProductData.find(item => item.id === id);
  const cardProduct = ProductData;
  const image = Object.values(product.image);

  const [selectedImage, setSelectedImage] = useState(image[0]);
  const [itemNo, setItemNo] = useState(1);

  const navigate = useNavigate();

  function handleItemNo(event) {
    const value = event.target.value;
    if (value) {
      setItemNo(parseInt(value));
    }
  }

  function handleIncrement(value) {
    if (value === 'decrease') {
      setItemNo(prev => Math.max(1, prev - 1));
    } else if (value === 'increase') {
      setItemNo(prev => prev + 1);
    }
  }

  function handleAddtoCart() {
    addQuantity(product, itemNo);
  }

  function handleShopNow() {
    addQuantity(product, itemNo);
    navigate('/checkout');
  }

  useEffect(() => {
    setItemNo(1);
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="mt-12 mx-5 md:mx-10">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="grid md:grid-cols-[1fr_8fr] gap-x-5">
            <div>
              <div className="hidden md:block space-y-2.5 cursor-pointer">
                {image.map(img => (
                  <div onClick={() => setSelectedImage(img)} className="">
                    <img
                      src={img}
                      alt={product.title}
                      className="w-full min-w-18"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={selectedImage}
                alt=""
                className="w-full h-full max-h-[595px] md:max-h-[628px]"
              />
            </div>
          </div>

          {/* Description and Cutomization */}

          <div>
            <p className="heading text-3xl">{product.title}</p>
            <p className="text-2xl my-2.5">{`$${product.price}`}</p>

            <p className="heading my-3.5">Quantity</p>

            <div className="grid grid-cols-[128px_1fr] gap-x-5 mb-5">
              <div className="relative">
                <div className="">
                  <input
                    type="number"
                    className=" px-10 bg-[#f1f1f1] outline-0 rounded-md w-full h-10 text-center"
                    value={Math.max(1, itemNo)}
                    onChange={handleItemNo}
                  />
                </div>
                <div
                  onClick={() => handleIncrement('decrease')}
                  className="absolute top-2 left-3 cursor-pointer"
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <div
                  onClick={() => handleIncrement('increase')}
                  className="absolute top-2 right-4 cursor-pointer"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>

              <div>
                <button
                  onClick={handleAddtoCart}
                  className="border px-7 rounded-md cursor-pointer hover:bg-black hover:text-white w-full h-11"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <button
                onClick={handleShopNow}
                className="border px-7 rounded-md hover:rounded-lg cursor-pointer bg-black text-white w-full h-11 transform transition-all duration-200 hover:scale-125"
              >
                Shop Now
              </button>
            </div>

            <div className="mt-7 p-4 bg-[#f7f7f7] rounded-md">
              <img
                src="/images/product-trust-badge.webp"
                alt=""
                className="mx-auto"
              />

              <p className="mt-1.5 text-center">
                Guaranteed safe & secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div className="mt-12 mx-5 md:mx-10 ">
        <div className="flex gap-x-16 text-lg font-medium overflow-x-auto  whitespace-nowrap py-2.5 mb-10">
          <div>Product</div>
          <div>Shipping and Returns</div>
          <div>About the brand</div>
          <div>Reviews</div>
          <div>Questions</div>
        </div>

        <div className="grid md:grid-cols-[1fr_4fr] gap-7.5">
          <div className="pl-2">
            <img src={image[1]} alt="" className="w-full min-w-[211px]" />
          </div>

          <div className="mt-0 md:mt-9">
            <p className="text-2xl font-medium mb-3">{product.title}</p>

            <p className="leading-relaxed text-[#b3b3b3]">
              He garments labelled as Committed are products that have been
              produced using sustainable fibers or processes, reducing their
              environmental impact. Mango’s goal is to support the
              implementation of practices more committed to the environment, and
              therefore increase the number of sustainable garments in the
              collection.
            </p>
          </div>
        </div>

        <div className="mt-12.5 md:mt-17.5 xl:mt-23">
          <p className="mb-6 md:mb-9 xl:mb-11 text-4xl text-center">
            Related Product
          </p>

          <RelatedProduct cardProduct={cardProduct} />

          {/* <div className="mt-12.5 md:mt-17.5 xl:mt-23">
            <p className="mb-6 md:mb-9 xl:mb-11 text-4xl text-center">
              You may also like
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-7.5">
              {cardProduct.slice(4, 8).map((item, index) => (
                <div key={index}>
                  <ProductCardDetails
                    title={item.title}
                    price={item.price}
                    image={item.image.image1}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer */}

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default ProductItem;

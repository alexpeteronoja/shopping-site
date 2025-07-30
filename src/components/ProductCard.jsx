import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../stores/CartStore';

function ProductCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const addToCart = useCartStore(state => state.addToCart);

  function handleVeiwMore() {
    navigate(`/product/${props.id}`);
  }

  function handleAddtoCart(e) {
    e.stopPropagation();
    addToCart(props.product);
  }

  return (
    <div>
      <div className="">
        <div
          className="relative overflow-hidden rounded h-[302px] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={props.image}
            alt={props.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-300 flex items-end pb-5 px-3 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url(${props.hoverdImage})`,
            }}
            onClick={handleVeiwMore}
          >
            <div
              onClick={e => e.stopPropagation()}
              className="space-y-2 absolute top-5 right-3"
            >
              <div>
                <i className="fa-solid fa-eye far cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-regular fa-star far cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left far cursor-pointer"></i>
              </div>
            </div>

            <div
              onClick={handleAddtoCart}
              className="font-medium w-full bg-white hover:bg-black hover:text-white transition-colors duration-300 rounded-lg text-center py-2.5 cursor-pointer"
            >
              Add to Cart
            </div>
          </div>
        </div>

        <div className="py-5">
          <p className="font-medium">{props.title}</p>
          <p className="py-1.5">{`$${props.price}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: product => {
        const existingItem = get().cart.find(item => item.id === product.id);

        if (existingItem) {
          set({
            cart: get().cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: id => {
        set({
          cart: get().cart.filter(item => item.id !== id),
        });
      },

      updateQuantity: (id, quantity) => {
        set({
          cart: get().cart.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      // addQuantity: (id, addQuantity) => {
      //   set({
      //     cart: get().cart.map(item =>
      //       item.id === id
      //         ? { ...item, quantity: item.quantity + addQuantity }
      //         : item
      //     ),
      //   });
      // },

      addQuantity: (product, addQuantity) => {
        const existingItem = get().cart.find(item => item.id === product.id);

        if (existingItem) {
          set({
            cart: get().cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + addQuantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: addQuantity }],
          });
        }
      },

      clearCart: () => set({ cart: [] }),

      totalItems: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: 'cart-storage', // 🔐 Key name in localStorage
    }
  )
);

// const useCartStore = create((set, get) => ({
//   isCartOpen: false,
//   toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
// }));

export default useCartStore;

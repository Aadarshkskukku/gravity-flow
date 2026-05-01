import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/types';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => {
        const existing = state.cart.find((item) => item.id === product.id);
        if (existing) {
          return { cart: state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((i) => i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)
      })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'shiploot-cart-storage' }
  )
);

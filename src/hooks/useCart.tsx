import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { CartItem } from "@/lib/types";

type CartCtx = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size?: string) => void;
  updateQty: (productId: string, qty: number, size?: string) => void;
  clear: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartCtx>({
  items: [], addItem: () => {}, removeItem: () => {}, updateQty: () => {}, clear: () => {},
  total: 0, count: 0, isOpen: false, openCart: () => {}, closeCart: () => {},
});

const KEY = "shiploot-cart-v1";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const addItem = useCallback((item: CartItem) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.product_id === item.product_id && p.size === item.size);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], quantity: next[i].quantity + item.quantity };
        return next;
      }
      return [...prev, item];
    });
    setIsOpen(true);
  }, []);

  const removeItem = (productId: string, size?: string) =>
    setItems(prev => prev.filter(p => !(p.product_id === productId && p.size === size)));

  const updateQty = (productId: string, qty: number, size?: string) =>
    setItems(prev => prev.map(p => (p.product_id === productId && p.size === size ? { ...p, quantity: Math.max(1, qty) } : p)));

  const clear = () => setItems([]);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total, count, isOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = { id: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  addItem: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  /** Most recent add, used by the toast. `key` changes on every add. */
  lastAdded: { id: string; quantity: number; key: number } | null;
  dismissLastAdded: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "hd-perfume-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [lastAdded, setLastAdded] =
    useState<CartContextValue["lastAdded"]>(null);
  const dismissLastAdded = useCallback(() => setLastAdded(null), []);

  // Hydrate from localStorage after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, loaded]);

  const addItem = useCallback((id: string, quantity = 1) => {
    setItems((prev) =>
      prev.some((i) => i.id === id)
        ? prev.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + quantity } : i,
          )
        : [...prev, { id, quantity }],
    );
    setLastAdded({ id, quantity, key: Date.now() });
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [],
  );

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.quantity, 0),
      addItem,
      setQuantity,
      removeItem,
      clear,
      lastAdded,
      dismissLastAdded,
    }),
    [
      items,
      addItem,
      setQuantity,
      removeItem,
      clear,
      lastAdded,
      dismissLastAdded,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

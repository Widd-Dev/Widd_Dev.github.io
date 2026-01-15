import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "@/contexts/CartContext";

export interface OrderHistoryItem {
  id: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  totalPrice: number;
  createdAt: string;
  queueNumber: number;
}

interface OrderHistoryContextType {
  orders: OrderHistoryItem[];
  addOrder: (order: Omit<OrderHistoryItem, "id" | "createdAt" | "queueNumber">) => OrderHistoryItem;
  clearHistory: () => void;
}

const OrderHistoryContext = createContext<OrderHistoryContextType | undefined>(undefined);

export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error("useOrderHistory must be used within an OrderHistoryProvider");
  }
  return context;
};

export const OrderHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderHistoryItem[]>(() => {
    const saved = localStorage.getItem("kopi-loka-order-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("kopi-loka-order-history", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Omit<OrderHistoryItem, "id" | "createdAt" | "queueNumber">) => {
    const today = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === today);
    const queueNumber = todayOrders.length + 1;

    const newOrder: OrderHistoryItem = {
      ...order,
      id: `order-${Date.now()}`,
      createdAt: new Date().toISOString(),
      queueNumber,
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const clearHistory = () => {
    setOrders([]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder, clearHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

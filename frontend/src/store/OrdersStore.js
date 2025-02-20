import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useOrderStore = create((set, get) => ({
  orderError: null,
  loading: false,
  orders: [],


  fetchMyOrders: async () => {
    const token = Cookies.get('token');
    if (!token) {
      alert("Please login first");
      return;
    }
    set({loading: true});
    try {
      const response = await axios.get(`${API_BASE_URL}/order/myorders`, {
        headers: { Authorization: `Bearer ${token}`, },
      });
      // console.log(response.data);
      set({ orders: response.data, orderError: null });
    } catch (error) {
      set({ orderError: error.response?.data?.message || error.message });
    }
    set({loading: false});
  },

  cancelOrder: async(orderId) => {
    const token = Cookies.get('token');
    if (!token) {
      alert("Please login first");
      return;
    }
    set({loading: true});
    try {
      const response = await axios.patch(`${API_BASE_URL}/order/cancel-order`, orderId, {
        headers: { Authorization: `Bearer ${token}`, },
      });
      await get().fetchMyOrders();
      alert(response?.data?.message);
    } catch (error) {
      console.error(error?.response?.data?.message || error);
      set({ orderError: error.response?.data?.message || 'cannot cancel order' });
    }
    set({loading: false});
  },



  placeOrder: async (orderData) => {
    const token = Cookies.get('token');
    if (!token) {
      alert("Please login first");
      return false;
    }
    set({loading: true});
    try {
      const response = await axios.post(`${API_BASE_URL}/order/add-order`, orderData, {
        headers: { Authorization: `Bearer ${token}`, },
      });
      await get().fetchMyOrders();
      set({ orderError: null });
    } catch (error) {
      set({ orderError: error.response?.data?.message || error.message });
      return false;
    }
    set({loading: false});
    return true;
  },

  }));

export default useOrderStore;

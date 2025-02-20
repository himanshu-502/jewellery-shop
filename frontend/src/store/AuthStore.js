import {create} from 'zustand';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useAuthStore = create((set, get) => ({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  phone: '',
  error: '',
  loading: false,
  userInfo: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setPhone: (phone) => set({phone}),
  setName: (name) => set({ name }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  setUserInfo: (userInfo) => set({ userInfo }),
  reset: () => set({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    error: '',
    loading: false,
    userInfo: null,
  }),


  registerUser: async () => {
    const { email, password, name, phone } = get();
    
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        email,
        password,
        name,
        phone,
      });
      set({  error: response.data.error });
      alert(response.data.message);
    } catch (error) {
      console.error('Registration failed:', error);
      set({ error: 'Registration failed. Please try again.' });
    } 
  },
}));

export default useAuthStore;
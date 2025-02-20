import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';
import useUserProfileStore from './UserProfileStore';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useLoginStore = create((set, get) => ({
  email: '',
  password: '',
  error: null,
  loading: false,
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  reset: () => {
    Cookies.remove('token');
    set({ email: '', password: '', error: null });
    const { reset } = useUserProfileStore.getState();
    reset();
  },

  loginUser: async () => {
    const { email, password } = get();
    const { fetchUserProfile } = useUserProfileStore.getState();
    
    set({ loading: true, error: null });

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
        email,
        password,
      });

      const token  = response.data.token;
      Cookies.set('token', token, { expires: 7, path: '/', sameSite: 'Strict' });
      set({ error: null });
      await fetchUserProfile();
      alert(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      set({ error: errorMessage });
      console.error('Login failed:', errorMessage);
    }
    set({loading: false});
  },

  logoutUser: () => {
    Cookies.remove('token');
    set({ email: '', password: '', error: null });
    const { reset } = useUserProfileStore.getState();
    reset();
    alert('user logged out successfully');
  },

}));

export default useLoginStore;
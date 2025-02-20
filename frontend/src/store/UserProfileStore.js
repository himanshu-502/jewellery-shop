import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useUserProfileStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      name: '',
      email: '',
      phone: '',
      role: '',
      address: [],
      reviews: [],
      users: [],
      error: null, 
      loading: false, 

      setUserInfo: (user) =>
        set({
          isSignedIn: true,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user?.role ?? '',
          address: user.address,
        }),

      fetchUserProfile: async () => {
          const token = Cookies.get('token') || null;
          if (!token) { return; }
          set({loading: true, error: null});
          try {
            const response = await axios.get(`${API_BASE_URL}/users/profile`, {
              headers: { Authorization: `Bearer ${token}` },
            });
  
            set({
              isSignedIn: true,
              name: response.data.name,
              email: response.data.email,
              phone: response.data.phone,
              role: response.data?.role ?? '',
              address: response.data.address,
            });
          } catch (error) {
            alert(error.response?.data?.message || 'Failed to fetch user data');
            console.error('Failed to fetch user profile:', error);
          }
          set({loading: false, error: null});
        },

        updateUserProfile: async (updatedData) => {
          const token = Cookies.get('token') || null;
          if (!token) return;
          set({loading: true, error: null});
          try {
            const response = await axios.patch(`${API_BASE_URL}/users/update-profile`, updatedData, {
              headers: { Authorization: `Bearer ${token}` },
            });
            await get().fetchUserProfile(); 
            
            alert(response.data.message);
          } catch (error) {
            alert(error.response?.data?.message || 'Failed to update profile');
            console.error('Failed to update user profile:', error);
          }
          set({loading: false, error: null});
        },

        updatePassword: async (oldPassword, newPassword) => {
          const token = Cookies.get('token') || null;
          if (!token) return;
          set({loading: true, error: null});
          try {
            const response = await axios.patch(
              `${API_BASE_URL}/users/update-password`,
              { oldPassword, newPassword },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(response.data.message);
          } catch (error) {
            alert(error.response?.data?.message || 'Failed to update password');
            console.error('Password update failed:', error);
          }
          set({loading: false, error: null});
        },
        
        updateAddresses: async(newAddresses) => { 
          const token = Cookies.get('token') || null;
          if(!token) return ;
          set({loading: true, error: null});
          try{
            const response = await axios.patch(
              `${API_BASE_URL}/users/update-address`,
              { newAddresses },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            await get().fetchUserProfile();
            alert(response.data.message);
          } catch (error) {
            alert (error.response?.data?.message || 'Failed to update addresses');
            console.error('Address update failed.', error);
          }
          set({loading: false, error: null});

        },

        fetchAllUsers: async() => {
          const token = Cookies.get('token') || null;
          if(!token) return ;
          const {role} = get();
          if(role!=='admin') {
            alert('admin access required');
            return;
          }
          set({loading: true, error: null});
          try{
            const response = await axios.get(
              `${API_BASE_URL}/users/all-users`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            set({users:response?.data});
          }
          catch(error){
            alert(error.response?.data?.message || 'failed to fetch user details');
            console.error('could not fetch user details', error);
          }
          set({loading: false, error: null});
        },


        updateUserRole: async ({ userId, action }) => {
          const token = Cookies.get('token') || null;
          if(!token) return ;
          const {role} = get();
          if(role!=='admin') {
            alert('admin access required');
            return;
          }
          set({loading: true, error: null});
          try {
            const response = await axios.patch(`${API_BASE_URL}/users/update-role`, {userId, action},
              { headers: { Authorization: `Bearer ${token}` } }
            );
            await get().fetchAllUsers();
            alert(response?.data?.message);
          } catch (error) {
            alert(error.response?.data?.message || 'failed to update user roles');
            console.error('Error updating user role:', error);
          }
          set({loading: false, error: null});
        },


        fetchMyReviews: async () => {
          const token = Cookies.get('token') || null;
          if(!token) return ;
          
          set({loading: true, error: null});
          try{
            const response = await axios.get(
              `${API_BASE_URL}/users/myreviews`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            set({reviews: response?.data});
          } catch (error) {
            alert (error.response?.data?.message || 'Failed to fetch user reviews');
            console.error('fetching review details failed.', error);
          }
          set({loading: false, error: null});

        },

        

      reset: () => {
        set({
          isSignedIn: false,
          name: '',
          email: '',
          phone: '',
          role: '',
          address: [],
        });
        localStorage.removeItem('user-store');
      },
      }),
    {
      name: 'user-store', // Key in localStorage
      getStorage: () => localStorage, // Use localStorage to persist
    }
  )
);

export default useUserProfileStore;

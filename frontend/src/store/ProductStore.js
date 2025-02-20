import { create } from 'zustand';
import useUserProfileStore from './UserProfileStore';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useProductStore = create((set, get) => ({
  products: [],
  categories: [],
  reviews: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/product/fetch-products`);
      set({products:response.data}); 
      // console.log(get().products);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Server Error. Cannot Fetch Product Details.';
      set({ error: errorMessage });
      console.error('cannot fetch products', errorMessage);
    }
    set({loading: false});
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/product/fetch-categories`);
      set({categories:response.data}); 
      // console.log(get().categories);    
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Server Error. Cannot Fetch Category Details.';
      set({ error: errorMessage });
      console.error('cannot fetch categories', errorMessage);
    }
    set({loading: false});
  },

  fetchReviews: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/product/fetch-reviews`);
      set({reviews: response?.data});      
      // console.log(get().reviews);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Server Error. Cannot Fetch Product Reviews.';
      set({ error: errorMessage });
      console.error('cannot fetch Reviews', errorMessage);
    }
    set({loading: false});
  },



  addProduct: async (productDetails) => {
    const { role } = useUserProfileStore.getState();
    const token = Cookies.get('token') || null;
    if (!token || role !== 'admin') {
      alert('Require admin access to perform the action');
      return;
    }
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      formData.append('name', productDetails.name);
      formData.append('description', productDetails.description);
      formData.append('price', productDetails.price);
      formData.append('stock', productDetails.stock);
      formData.append('categories', JSON.stringify(productDetails.categories));
      productDetails.images.forEach((image, index) => {
        formData.append(`images`, image); 
      });
    
      const response = await axios.post(`${API_BASE_URL}/product/add-product`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      await get().fetchProducts();
      alert(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Cannot add products';
      set({ error: errorMessage });
      console.error('Cannot add products', errorMessage);
    }
    set({ loading: false });
  },


  updateProduct: async (updatedProductDetails) => {
    const {role} = useUserProfileStore.getState();
    const token = Cookies.get('token') || null;
    if(!token || role!=='admin'){
      alert('require admin access to perform the action');
      return;
    }
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      formData.append('id', updatedProductDetails.id);
      formData.append('name', updatedProductDetails.name);
      formData.append('description', updatedProductDetails.description);
      formData.append('price', updatedProductDetails.price);
      formData.append('stock', updatedProductDetails.stock);
      formData.append('categories', JSON.stringify(updatedProductDetails.categories));
      formData.append('imageUrls', JSON.stringify(updatedProductDetails.images));
      updatedProductDetails.newImages.forEach((image, index) => {
        formData.append(`newImages`, image); 
      });

      const response = await axios.patch(`${API_BASE_URL}/product/update-product`, formData, {
        headers: { 
          Authorization: `Bearer ${token}` ,
          'Content-Type': 'multipart/form-data',
        },
      });  
      await get().fetchProducts();
      alert(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Cannot update products';
      set({ error: errorMessage });
      console.error('cannot update products', errorMessage);
    }
    set({loading: false});
  },
  


  addCategory: async (categoryDetails) => {
    const {role} = useUserProfileStore.getState();
    const token = Cookies.get('token') || null;
    if(!token || role!=='admin'){
      alert('require admin access to perform the action');
      return;
    }
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      formData.append('name', categoryDetails.name);
      
      if(categoryDetails.imageBanner instanceof File){
        formData.append('imageBanner', categoryDetails.imageBanner);
      }

      const response = await axios.post(`${API_BASE_URL}/product/add-category`, formData, {
        headers: { 
          Authorization: `Bearer ${token}` ,
          'Content-Type' : 'multipart/form-data',
        },
      });

      await get().fetchCategories();
      alert(response?.data?.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Cannot add new category';
      set({ error: errorMessage });
      console.error('cannot add new Category', errorMessage);
    }
    set({loading: false});
  },
  


  updateCategory: async (updatedCategoryDetails) => {
    const { role } = useUserProfileStore.getState();
    const token = Cookies.get('token') || null;
    if (!token || role !== 'admin') {
      alert('Require admin access to perform this action');
      return;
    }
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      formData.append('id', updatedCategoryDetails.id);
      formData.append('name', updatedCategoryDetails.name);

      if (updatedCategoryDetails.imageBanner instanceof File) {
        formData.append('imageBanner', updatedCategoryDetails.imageBanner);
      }
      const response = await axios.patch(`${API_BASE_URL}/product/update-category`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      });

      await get().fetchCategories();
      alert(response?.data?.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Cannot update category';
      set({ error: errorMessage });
      console.error('Cannot update category:', errorMessage);
    }
    set({ loading: false });
  },


  postReview: async (reviewDetails) => {
    const token = Cookies.get('token') || null;
    if (!token) {
      alert('Login is required to rate the products');
      return;
    }
    set({ loading: true, error: null });
    try{
      const response = await axios.post(`${API_BASE_URL}/product/post-review`, reviewDetails, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await get().fetchReviews();
      alert(response?.data?.message);
    }
    catch(error){
      const errorMessage = error.response?.data?.message || 'Cannot post your review';
      set({ error: errorMessage });
      console.error('Cannot post your review:', errorMessage);
    }
    set({loading: false});
  },

}));

export default useProductStore;


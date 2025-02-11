import { create } from "zustand";
import { locations, aboutDesc, blogs } from "../data/DataSet";

export const useProductStore = create((set) => ({
  locations: [],
  aboutDesc: [],
  blogs: [],
  
  fetchLocations: () => set({locations: locations}),
  fetchAboutDesc: () => set({aboutDesc: aboutDesc}),
  fetchBlogs: () => set({blogs: blogs}), 

  //   function to fetch everything in one call
  fetchAllData: () => {
    set({
      trendingProducts: trendingProducts,
      limitedStocks: limitedStocks,
      collections: collections,
      products: products,
      reviews: reviews,
      assurances: assurances,
      features: features,
    });
  },
}));

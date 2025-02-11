import { create } from "zustand";
import { products, reviews, assurances, features, collections, trendingProducts, limitedStocks } from "../data/DataSet";

export const useProductStore = create((set) => ({
  trendingProducts: [],
  limitedStocks: [],
  collections: [],
  products: [],
  reviews: [],
  assurances: [],
  features: [],
  
  fetchTrendingProducts: () => set({trendingProducts: trendingProducts}),
  fetchLimitedStocks: () => set({limitedStocks: limitedStocks}),
  fetchCollections: () => set({collections: collections}),
  fetchProducts: () => set({ products: products }),
  fetchReviews: () => set({ reviews: reviews }),
  fetchAssurances: () => set({ assurances: assurances }),
  fetchFeatures: () => set({ features: features }),

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

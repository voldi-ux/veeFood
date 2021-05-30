import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      // add item to wishlist. it should add a new item to the wishlist else remove if the item is already in the wishlist
      const item = state.wishlistItems.find((item) => item.price == action.payload.price);
      if (item) {
        (state.wishlistItems = state.wishlistItems.filter((item) => item.price !== action.payload.price));
      } else {
         if(state.wishlistItems.length === 7) {
           state.wishlistItems.shift();
          }
          state.wishlistItems.push(action.payload);
      }
       
    },
    removeItemFromWishlist: (state,action) => {
        state.wishlistItems = state.wishlistItems.filter((item) => item.price !== action.payload);
      
    }
  },

});

export const { addItemToWishlist,removeItemFromWishlist } = WishlistSlice.actions;
export const getWishlistItems = (state) => state.wishlist.wishlistItems;
export default WishlistSlice.reducer;

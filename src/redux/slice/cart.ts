import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
interface Service {
    availability: string;
    category: {
      id: string;
      name: string;
      image: string;
      userId: string;
      createdAt: string;
    };
    categoryId: string;
    createdAt: string;
    id: string;
    location: string;
    price: number;
    serviceName: string;
    service_desc: string;
    service_img: string;
    status: string;
    updatedAt: string;
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
      role: string;
    };
    userId: string;
  }
  
export interface ServiceType {
  cart: Service[];
}

const initialState: ServiceType = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Service>) => {
      const isExist = state.cart.find(
        (item) => item?.id === action?.payload?.id
      );
      console.log(isExist, "is exist");
      if (isExist) {
        message.error("Item already exist");
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

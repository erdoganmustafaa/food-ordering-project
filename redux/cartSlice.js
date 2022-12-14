import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantitiy:0,
        total:0,
        
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.quantitiy += action.payload.quantitiy;
            state.total += action.payload.price;
        },
        reset:(state,action)=>{
            state.products=[];
            state.quantitiy =0;
            state.total= 0;
        }
    }
})

export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //Redux ToolKit
            //Mutating the State here
            //Redux ToolKit uses immer behind the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //Redux Tool Kit - Either Mutate the existing state or return the new state
            // state.items.length = 0; // originalState = []

            return { items: [] }  // this new object will be replaced inside originalState = { items: [] }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

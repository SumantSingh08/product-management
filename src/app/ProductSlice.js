import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchData: '',
    editData: null,
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            console.log(action.payload);

        },
        addsearchData: (state, action) => {
            state.searchData = action.payload;
        },
        setEditData: (state, action) => {
            state.editData = action.payload;
            console.log('editproductdata', action.payload);

        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                p => p.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = action.payload;
            }
            state.editData = null; 
        },
    },


});

export const { addProduct, addsearchData, setEditData, updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
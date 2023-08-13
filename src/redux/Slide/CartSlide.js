import { createSlice } from '@reduxjs/toolkit';

const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [],
        total: 0,
        totalOriginal: 0,
        numberOfItem: 0,
        cartItemUserSelect: [], //sử lý phần user chọn sản phẩm trong list cart của họ: chứa id item id
    },
    reducers: {
        setCart: (state, action) => {
            state.cartItem = action.payload?.items;
        },
        addItemToCartItemUserSelect: (state, action) => {
            if (!state.cartItemUserSelect.includes(action.payload)) state.cartItemUserSelect.push(action.payload);
        },
        removeItemToCartItemUserSelect: (state, action) => {
            state.cartItemUserSelect = state.cartItemUserSelect.filter((item) => item !== action.payload);
        },
        selectAllCartItem: (state) => {
            state.cartItemUserSelect = state.cartItem.map((item) => item.id);
        },
        unSelectAllCartItem: (state) => {
            state.cartItemUserSelect = [];
            state.total = 0;
            state.numberOfItem = 0;
        },
        changeQuantityCartItem: (state, action) => {
            const newItem = action.payload;
            const index = state.cartItem.findIndex((item) => item.id === newItem.id);
            state.cartItem[index] = newItem;
        },
        addCartItem: (state, action) => {
            const list = state.cartItem.map((item) => item.id);
            const newItem = list.filter((obj) => !list.includes(obj.id));
            console.log(newItem);
            if (newItem) {
                state.cartItemUserSelect = [...state.cartItemUserSelect, ...newItem];
            }
            state.cartItem = action.payload.items;
        },
        removeItem: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
            if (state.cartItemUserSelect.includes(action.payload))
                state.cartItemUserSelect = state.cartItemUserSelect.filter((item) => item !== action.payload);
        },
        cartLogout: (state) => {
            state.cartItem = [];
            state.total = 0;
            state.totalOriginal = 0;
            state.numberOfItem = 0;
            state.cartItemUserSelect = [];
        },
        updateTotal: (state) => {
            let total = 0;
            state.cartItem.forEach((item) => {
                if (state.cartItemUserSelect.includes(item.id)) total += item.finalPrice;
            });
            state.total = total;
        },
        updateNumberOfItem: (state) => {
            let quantity = 0;
            state.cartItem.forEach((item) => {
                if (state.cartItemUserSelect.includes(item.id)) quantity += item.quantity;
            });
            state.numberOfItem = quantity;
        },
        updateTotalOriginal: (state) => {
            let total = 0;
            state.cartItem.forEach((item) => {
                if (state.cartItemUserSelect.includes(item.id)) total += item.originalPrice;
            });
            state.totalOriginal = total;
        },
    },
});

export default cartSlide;
export const {
    setCart,
    addCartItem,
    removeItem,
    cartLogout,
    addItemToCartItemUserSelect,
    removeItemToCartItemUserSelect,
    selectAllCartItem,
    unSelectAllCartItem,
    updateTotal,
    updateNumberOfItem,
    updateTotalOriginal,
    changeQuantityCartItem,
} = cartSlide.actions;

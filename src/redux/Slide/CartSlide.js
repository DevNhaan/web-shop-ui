import { createSlice } from '@reduxjs/toolkit';

const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [],
        total: 0,
        numberOfItem: 0,
        cartItemUserSelect: [], //sử lý phần user chọn sản phẩm trong list cart của họ: chứa id item id
    },
    reducers: {
        setCart: (state, action) => {
            state.cartItem = action.payload?.items;
        },
        setTotal: (state) => {
            state.total = state.cartItemUserSelect.reduce((init, id) => {
                const currentItem = state.cartItem.find((item) => item.id === id);
                return init + currentItem.finalPrice * currentItem.quantity;
            }, 0);
        },
        updateNumberOfItem: (state) => {
            state.numberOfItem = state.cartItemUserSelect.reduce((init, itemSelected) => {
                const item = state.cartItem.find((item) => item.id === itemSelected);

                return init + item.quantity;
            }, 0);
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
        increaseQuantityItem: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            item.quantity++;
        },
        descreseQuantityItem: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            item.quantity--;
        },
        addItem: (state, action) => {
            state.cartItem.push(action.payload);
            state.numberOfItem += action.payload.quantity;
        },
        removeItem: (state, action) => {
            state.cartItem = state.items.filter((item) => item.id !== action.payload);
        },
        cartLogout: (state) => {
            state.cartItem = [];
            state.total = 0;
            state.numberOfItem = 0;
            state.cartItemUserSelect = [];
        },
    },
});

export default cartSlide;
export const {
    setCart,
    setTotal,
    addItem,
    removeItem,
    updateNumberOfItem,
    increaseQuantityItem,
    cartLogout,
    descreseQuantityItem,
    addItemToCartItemUserSelect,
    removeItemToCartItemUserSelect,
    selectAllCartItem,
    unSelectAllCartItem,
} = cartSlide.actions;

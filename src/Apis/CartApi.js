import {
    addCartItem,
    setCart,
    updateNumberOfItem,
    updateTotal,
    updateTotalOriginal,
    changeQuantityCartItem,
} from '../../src/redux/Slide/CartSlide';

import { toast } from 'react-toastify';

export const getCartByUserId = async (userId, dispatch, httpRequest) => {
    if (httpRequest === null) return null;
    try {
        const response = await httpRequest.get(`cart/${userId}`);
        dispatch(setCart(response.data?.content));
    } catch (error) {
        console.log(error);
    }
};
export const addProductToCart = async (data, dispatch, httpRequest) => {
    if (httpRequest === null) return null;
    try {
        const response = await httpRequest.post('cart/add-product', data);

        dispatch(addCartItem(response.data.content));

        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());

        toast.success('Thêm sản phẩm thành công');
    } catch (error) {
        console.log(error);
    }
};
export const changeQuantity = async (data, dispatch, httpRequest) => {
    if (httpRequest === null) return null;
    try {
        const response = await httpRequest.put(`cart/cart-item/update/${data.cartItemId}/${data.type}`);
        dispatch(changeQuantityCartItem(response.data.content));
        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());
    } catch (error) {
        console.log(error);
    }
};

import {
    addCartItem,
    setCart,
    updateNumberOfItem,
    updateTotal,
    updateTotalOriginal,
    changeQuantityCartItem,
    removeItem,
} from '../../src/redux/Slide/CartSlide';

import { toast } from 'react-toastify';

export const getCartByUserId = async (userId, dispatch, axiosJwt) => {
    if (axiosJwt === null) return null;
    try {
        const response = await axiosJwt.get(`cart/${userId}`);
        dispatch(setCart(response.data?.content));
    } catch (error) {
        console.log(error);
    }
};
export const addProductToCart = async (data, dispatch, axiosJwt) => {
    if (!axiosJwt) return null;
    try {
        const response = await axiosJwt.post('cart/add-product', data);

        dispatch(addCartItem(response.data.content));

        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());

        toast.success('Thêm sản phẩm thành công');
    } catch (error) {
        console.log(error);
    }
};
export const changeQuantity = async (data, dispatch, axiosJwt) => {
    if (axiosJwt === null) return null;
    try {
        const response = await axiosJwt.put(`cart/cart-item/update/${data.cartItemId}/${data.type}`);
        dispatch(changeQuantityCartItem(response.data.content));
        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());
    } catch (error) {
        console.log(error);
    }
};

export const deleteCartItem = async (id, dispatch, axiosJwt) => {
    if (axiosJwt === null) return null;
    try {
        const response = await axiosJwt.delete(`cart/cart-item/delete/${id}`);

        if (response.data.content) {
            dispatch(removeItem(id));
            dispatch(updateNumberOfItem());
            dispatch(updateTotal());
            dispatch(updateTotalOriginal());

            toast.success('Xóa sản phẩm thành công');
        } else {
        }
    } catch (error) {
        console.log(error);
        toast.error('Xóa sản phẩm thành công');
    }
};

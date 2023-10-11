import { toast } from 'react-toastify';
import { addOrder, setOrder } from '~/redux/Slide/OrderSlice';
import { getCartByUserId } from './CartApi';

export const createOrderApi = async (data, navigate, dispatch, axiosJwt) => {
    if (axiosJwt === null) return navigate('/auth/login');
    try {
        const response = await axiosJwt.post('/order', data);

        dispatch(addOrder(response.data.content));
        toast.success('Đặt hàng thành công');
        navigate('/order-comfirm');
        getCartByUserId(data.userId, dispatch, axiosJwt);
    } catch (error) {
        console.log(error);
        toast.error('Đặt hàng thành công');
    }
};
export const getAllOrder = async (userId, dispatch, axiosJwt) => {
    if (axiosJwt === null) return;
    try {
        const response = await axiosJwt.get(`/order/${userId}`);

        dispatch(setOrder(response.data.content));
    } catch (error) {
        console.log(error);
    }
};

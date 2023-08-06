import { isLoading, isNotLoading } from '../redux/Slide/LoadingSlide';
import { getCart } from '../redux/Slide/CartSlide';

export const getCartByUserId = async (userId, dispatch, httpRequest) => {
    try {
        dispatch(isLoading);
        const response = await httpRequest.get(`cart/${userId}`);

        console.log(response.data);

        dispatch(getCart(response.data));
        dispatch(isNotLoading);
    } catch (error) {
        console.log(error);
        dispatch(isNotLoading);
    }
};

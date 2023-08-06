import { isLoading, isNotLoading } from '../redux/Slide/LoadingSlide';
import { getProductsSuccess } from '../redux/Slide/ProductSlide';

export const getAllProducts = async (dispatch, axiosJwt) => {
    try {
        dispatch(isLoading);
        const response = await axiosJwt.get('products');
        dispatch(getProductsSuccess(response.data.content));
        dispatch(isNotLoading);
    } catch (error) {
        console.log(error);
    }
};

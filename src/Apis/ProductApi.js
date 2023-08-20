import { getProductsSuccess } from '../redux/Slide/ProductSlide';
import { request } from '../Untils/request';

const getAllProduct = async (dispatch) => {
    try {
        const response = await request.get('products');
        dispatch(getProductsSuccess(response.data.content));
    } catch (error) {
        console.log(error);
    }
};

export default getAllProduct;

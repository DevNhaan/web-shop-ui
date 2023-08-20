import { toast } from 'react-toastify';
import { addAddressAction, deleteAddressAction, updateUserDtails } from '../redux/Slide/AuthSlide';

export const addAddress = async (data, dispatch, axiosToken) => {
    try {
        const res = await axiosToken.post(`address/create/${data.userId}`, data.address);
        console.log(res.data.content);
        dispatch(addAddressAction(res.data.content));
        toast.success('Thêm địa chỉ thành công');
    } catch (e) {
        console.log(e);

        toast.error('Thêm địa chỉ thât bại.');
    }
};

export const deleteAddress = async (id, dispatch, axiosToken) => {
    try {
        const res = await axiosToken.delete(`address/${id}`);
        console.log(res.data.content);
        dispatch(deleteAddressAction(id));
        toast.success('Xóa địa chỉ thành công');
    } catch (e) {
        console.log(e);
        toast.error('Xóa địa chỉ thât bại.');
    }
};

export const updateAddress = async (data, dispatch, axiosToken) => {
    try {
        const res = await axiosToken.put(`user/update-details/${data.id}`, data);
        console.log(res.data.content);
        dispatch(updateUserDtails(res.data.content));
        toast.success('Cập nhật địa chỉ thành công');
    } catch (e) {
        console.log(e);
        toast.error('Cập nhật địa chỉ thât bại.');
    }
};

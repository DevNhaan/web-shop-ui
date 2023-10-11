import { useDispatch, useSelector } from 'react-redux';
import { Container, Avatar, Infor, Input, Address } from './Profile.style.js';
import { BsPencilSquare, BsPencil } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineWarning, AiFillWarning, AiOutlineMenu } from 'react-icons/ai';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { getToken, getUserId, inforUserSelector } from '../../../redux/Selector/AuthSelector.js';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';
import { deleteAddress, setDefaultAddressApi, updateAddress } from '../../../Apis/ProfileApi.js';
import httpRequest from '../../../Apis/request.js';
import { MdLocationPin } from 'react-icons/md';
import Button from '~/Component/Layout/Button/index.js';
import { IoCloseOutline } from 'react-icons/io5';

const validationSchema = yup.object({
    displayName: yup.string().required('Tên hiển thị không thể trống.').min(5, 'Ít nhất 5 kí tự.'),
    phone: yup
        .string()
        .required('Nhập số điện thoại.')
        .matches(/^0\d{9,12}$/, 'Nhập đúng số điện thoại.'),
});

function Profile() {
    const { email, userAddress, username, ...inforUpdate } = useSelector(inforUserSelector);
    const [edit, setEdit] = useState({});
    const token = useSelector(getToken);
    const userId = useSelector(getUserId);
    const dispatch = useDispatch();

    const hiddenInfo = (string) => {
        if (string) return string.replace(string.substring(0, string.length / 3), '*'.repeat(string.length / 3));
    };

    const handleEdit = (name) => {
        setEdit((prev) => ({ ...prev, [name]: true }));
    };

    const handleOnblur = (name) => {
        setEdit((prev) => ({ ...prev, [name]: false }));
    };

    const handleSubmit = (values) => {
        const axiosToken = httpRequest(token, dispatch);
        if (axiosToken) {
            updateAddress(values, dispatch, axiosToken);
        }
    };

    const formik = useFormik({
        initialValues: inforUpdate,
        validateOnBlur: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    const handleDelete = (id) => {
        const axiosToken = httpRequest(token, dispatch);
        if (axiosToken) {
            deleteAddress(id, dispatch, axiosToken);
        }
    };
    const handleSetDefaultAddress = (id) => {
        const data = {
            userId,
            addressId: id,
        };
        const axiosToken = httpRequest(token, dispatch);
        if (axiosToken) {
            setDefaultAddressApi(data, dispatch, axiosToken);
        }
    };
    return (
        <Container className="container" onSubmit={formik.handleSubmit}>
            <Avatar>
                <img src="/user.png" alt="user_image" />
                <span>
                    <BsPencil />
                </span>
            </Avatar>
            <Infor>
                <p className="heading-s">Hồ sơ của bạn</p>

                <Input>
                    <strong>Tên: </strong>
                    <span className="field">
                        {edit.displayName ? (
                            <input
                                type="text"
                                name="displayName"
                                onChange={formik.handleChange}
                                onBlur={(e) => {
                                    handleOnblur('displayName');
                                    formik.handleBlur(e);
                                }}
                                value={formik.values.displayName}
                            />
                        ) : (
                            formik.values.displayName
                        )}
                    </span>
                    <div onClick={() => handleEdit('displayName')}>
                        <BsPencilSquare />
                    </div>
                    {formik.touched.displayName && formik.errors.displayName ? (
                        <span className="error">
                            <AiOutlineWarning /> {formik.errors.displayName}
                        </span>
                    ) : (
                        ''
                    )}
                </Input>
                <Input>
                    <strong>Email: </strong>
                    <span className="field">{hiddenInfo(email)}</span>
                </Input>
                <Input>
                    <strong>Số điện thoại: </strong>
                    <span className="field">
                        {edit.phone ? (
                            <input
                                type="text"
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={(e) => {
                                    handleOnblur('phone');
                                    formik.handleBlur(e);
                                }}
                                value={formik.values.phone || ''}
                            />
                        ) : (
                            formik.values.phone
                        )}
                    </span>
                    <div onClick={() => handleEdit('phone')}>
                        <BsPencilSquare />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                        <span className="error">
                            <AiOutlineWarning /> {formik.errors.phone}
                        </span>
                    ) : (
                        ''
                    )}
                </Input>
                <strong>Địa chỉ: </strong>
                <Address>
                    {userAddress.length > 0 ? (
                        userAddress.map((address) => (
                            <p className="address-item" key={address.id}>
                                <BiLocationPlus /> {`${address.address}, ${address.district}, ${address.city}`}{' '}
                                {address.defaultAddress ? (
                                    <span className="tag primary">Mặt định</span>
                                ) : (
                                    <Popup
                                        trigger={
                                            <button type="button" className="button-menu">
                                                <AiOutlineMenu />
                                            </button>
                                        }
                                        modal
                                    >
                                        {(close) => (
                                            <div className="modal">
                                                <button className="modal_close" onClick={close}>
                                                    <IoCloseOutline />
                                                </button>
                                                <div className="modal_header"> Đặt địa chỉ mặt định</div>
                                                <div className="modal_content modal-container">
                                                    <MdLocationPin /> Địa chỉ này sẽ là địa chỉ mặt định của bạn.
                                                </div>
                                                <div className="modal_actions">
                                                    <Button
                                                        type="button"
                                                        onClick={() => {
                                                            handleSetDefaultAddress(address.id);
                                                            close();
                                                        }}
                                                        className="modal_button_action btn btn-warning"
                                                    >
                                                        Lưu
                                                    </Button>

                                                    <button
                                                        type="button"
                                                        className="btn-cancel btn modal_button_action cancel"
                                                        onClick={() => {
                                                            close();
                                                        }}
                                                    >
                                                        Hủy
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                )}
                                <span className="btn-delete btn btn-s">
                                    <Popup
                                        trigger={
                                            <button type="button" className="delete-btn">
                                                <RiDeleteBack2Fill />
                                            </button>
                                        }
                                        modal
                                    >
                                        {(close) => (
                                            <div className="modal">
                                                <button className="modal_close" onClick={close}>
                                                    <FaTimes />
                                                </button>
                                                <div className="modal_header"> Xóa địa chỉ</div>
                                                <div className="modal_content modal-container">
                                                    <AiFillWarning /> Bạn có chắc chắn muốn xóa địa chỉ.
                                                </div>
                                                <div className="modal_actions">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleDelete(address.id);
                                                            close();
                                                        }}
                                                        className="modal_button_action btn warning"
                                                    >
                                                        Xóa địa chỉ
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn-delete btn modal_button_action cancel"
                                                        onClick={() => {
                                                            close();
                                                        }}
                                                    >
                                                        Hủy
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                </span>
                            </p>
                        ))
                    ) : (
                        <p>Bạn chưa có địa chỉ</p>
                    )}
                    <Link to="/user-address" className="primary-color">
                        <BiLocationPlus /> Thêm địa chỉ
                    </Link>
                </Address>
                <button type="submit" disabled={!formik.isValid} className="btn btn-primary btn-s">
                    Lưu thông tin
                </button>
            </Infor>
        </Container>
    );
}

export default Profile;

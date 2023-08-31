import { useFormik } from 'formik';
import * as yup from 'yup';
import { Infor, InputWrap, GroupInput } from './Address.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { AiOutlineWarning } from 'react-icons/ai';
import httpRequest from '../../../Apis/request';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId } from '../../../redux/Selector/AuthSelector';
import { useLocation, useNavigate } from 'react-router-dom';
import { addAddress } from '../../../Apis/ProfileApi';

const validationSchema = yup.object({
    address: yup.string().required('Không thể trống.').min(5, 'Ít nhất 5 kí tự.'),
    ward: yup.string().required('Không thể trống.'),
    city: yup.string().required('Không thể trống.'),
    district: yup.string().required('Không thể trống.'),
});
function Address({ userAddress = null, closeModal }) {
    const [cities, setCities] = useState([]);
    const token = useSelector(getToken);
    const userId = useSelector(getUserId);

    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = async (values) => {
        const axiosToken = httpRequest(token, dispatch);
        if (axiosToken) {
            const data = {
                userId: userId,
                address: values,
            };
            addAddress(data, dispatch, axiosToken);
            if (location.pathname.includes('user-address')) navigate('/profile');
            if (closeModal) {
                closeModal();
            }
        }
    };
    const formik = useFormik({
        initialValues: {
            address: userAddress?.address,
            district: userAddress?.district,
            ward: userAddress?.ward,
            city: userAddress?.city,
        },
        validateOnBlur: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });
    return (
        <Infor onSubmit={formik.handleSubmit} className="container">
            <p className="heading-s">Thêm Thông tin địa chỉ</p>
            <InputWrap>
                <label htmlFor="address">Địa chỉ *</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Số địa chỉ hiện tại"
                />
                {formik.touched.address && formik.errors.address ? (
                    <span className="error">
                        <AiOutlineWarning /> {formik.errors.address}
                    </span>
                ) : (
                    ''
                )}
            </InputWrap>
            <GroupInput>
                <InputWrap>
                    <label htmlFor="city">Thành phố/Tỉnh *</label>
                    <Select
                        name="city"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 6,
                            colors: {
                                ...theme.colors,
                                primary25: 'var(--primary-color)',
                                primary: 'var(--primary-color)',
                            },
                        })}
                        placeholder="Chọn thành phố"
                        defaultValue={'Chọn thành phố'}
                        onBlur={(e) => formik.setFieldTouched('city', true)}
                        onChange={(selectedOption) => formik.setFieldValue('city', selectedOption.value)}
                        options={cities.map((city) => ({ value: city.Name, label: city.Name }))}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <span className="error">
                            <AiOutlineWarning /> {formik.errors.city}
                        </span>
                    ) : (
                        ''
                    )}
                </InputWrap>
                <InputWrap>
                    <label htmlFor="email">Quận/Huyện *</label>
                    <Select
                        name="district"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 6,
                            colors: {
                                ...theme.colors,
                                primary25: 'var(--primary-color)',
                                primary: 'var(--primary-color)',
                            },
                        })}
                        placeholder="Chọn quận huyện"
                        defaultValue={formik.values.district}
                        onBlur={(e) => formik.setFieldTouched('district', true)}
                        onChange={(selectedOption) => formik.setFieldValue('district', selectedOption.value)}
                        options={cities
                            .find((city) => city.Name === formik.values.city)
                            ?.Districts.map((district) => ({ value: district.Name, label: district.Name }))}
                    />
                    {formik.touched.district && formik.errors.district ? (
                        <span className="error">
                            <AiOutlineWarning /> {formik.errors.district}
                        </span>
                    ) : (
                        ''
                    )}
                </InputWrap>
            </GroupInput>
            <InputWrap>
                <label htmlFor="name">Phường/Xã *</label>
                <Select
                    name="ward"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 6,
                        colors: {
                            ...theme.colors,
                            primary25: 'var(--primary-color)',
                            primary: 'var(--primary-color)',
                        },
                    })}
                    placeholder="Chọn phường xã"
                    onBlur={(e) => formik.setFieldTouched('ward', true)}
                    defaultValue={formik.values.ward}
                    onChange={(selectedOption) => formik.setFieldValue('ward', selectedOption.value)}
                    options={cities
                        .find((city) => city.Name === formik.values.city)
                        ?.Districts.find((district) => district.Name === formik.values.district)
                        ?.Wards.map((ward) => ({ value: ward.Name, label: ward.Name }))}
                />
                {formik.touched.ward && formik.errors.ward ? (
                    <span className="error">
                        <AiOutlineWarning /> {formik.errors.ward}
                    </span>
                ) : (
                    ''
                )}
            </InputWrap>

            <button type="submit" className="btn btn-primary btn-m" disabled={!formik.isValid}>
                Thêm địa chỉ mới
            </button>
        </Infor>
    );
}

export default Address;

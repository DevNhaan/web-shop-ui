import { Form, GroupInput, Social, FieldError } from '../AuthLayout.style';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible, AiOutlineWarning } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { isLoading, isNotLoading } from '../../../../redux/Slide/LoadingSlide';
import { registerSuccess, registerFailure } from '../../../../redux/Slide/AuthSlide';

const validationSchema = yup.object({
    username: yup.string().required('Nhập tên đăng nhập.').min(5, 'Tên đăng nhập ít nhất 5 kí tự.'),

    displayName: yup.string().required('Tên hiển thị.').min(5, 'Tên hiển thị ít nhất 5 kí tự.'),
    password: yup
        .string()
        .required('Password is required.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password ít nhất 8 ký tự, tồn tại 1 chữ số và một ký tự đặt biệt.',
        ),
    email: yup
        .string()
        .required('Nhập email')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Nhập đúng email của bạn.'),

    confirmedPassword: yup
        .string()
        .required('Mật khẩu không khớp')
        .oneOf([yup.ref('password'), null], 'Password must match'),
});

function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setRePassword] = useState(false);

    const handleSubmit = async (values) => {
        console.log({ values });
        dispatch(isLoading);
        await axios
            .post('http://localhost:8080/api/v1/auth/register', values)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) dispatch(registerSuccess());
                dispatch(isNotLoading);
                navigate('/');
            })
            .catch((error) => {
                dispatch(registerFailure(error));
            });
    };
    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validateOnBlur: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <Form id="scrollbar" onSubmit={formik.handleSubmit}>
            <p className="heading-l">Đăng Ký</p>
            <GroupInput>
                <label htmlFor="username">
                    <i>
                        <FaUser />
                    </i>
                    Tên đăng nhập
                </label>
                <div className="inputWrap">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.username && formik.errors.username ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.username}
                    </FieldError>
                ) : (
                    ''
                )}
            </GroupInput>
            <GroupInput>
                <label htmlFor="displayName">
                    <i>
                        <FaUser />
                    </i>
                    Tên hiển thị
                </label>
                <div className="inputWrap">
                    <input
                        id="displayName"
                        name="displayName"
                        type="text"
                        value={formik.values.displayName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.displayName && formik.errors.displayName ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.displayName}{' '}
                    </FieldError>
                ) : (
                    ''
                )}
            </GroupInput>
            <GroupInput>
                <label htmlFor="email">
                    <i>
                        <MdEmail />
                    </i>
                    Email
                </label>
                <div className="inputWrap">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.email && formik.errors.email ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.email}{' '}
                    </FieldError>
                ) : (
                    ''
                )}
            </GroupInput>
            <GroupInput>
                <label htmlFor="password">
                    <i>
                        <FaLock />
                    </i>
                    Mật khẩu
                </label>
                <div className="inputWrap">
                    <input
                        name="password"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <span onClick={() => setShowPassword(!showPassword)} className="show-password">
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                </div>

                {formik.touched.password && formik.errors.password ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.password}{' '}
                    </FieldError>
                ) : (
                    ''
                )}
            </GroupInput>
            <GroupInput>
                <label htmlFor="confirmedPassword">
                    <i>
                        <FaLock />
                    </i>
                    Nhập lại mật khẩu
                </label>
                <div className="inputWrap">
                    <input
                        name="confirmedPassword"
                        id="confirmedPassword"
                        type={showRePassword ? 'text' : 'password'}
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <span onClick={() => setRePassword(!showRePassword)} className="show-password">
                        {showRePassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                </div>

                {formik.touched.confirmedPassword && formik.errors.confirmedPassword ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.confirmedPassword}{' '}
                    </FieldError>
                ) : (
                    ''
                )}
            </GroupInput>
            <button type="submit" className="submit btn btn-primary" disabled={!formik.isValid}>
                Đăng ký
            </button>

            <p className="line">or</p>

            <Social>
                <a href="#!" className="btn">
                    <img src="/facebook-logo.svg" alt="" />
                    Đăng ký bằng facebook
                </a>
                <a href="#!" className="btn">
                    <img src="/google-icon.svg" alt="" />
                    Đăng ký bằng google
                </a>
            </Social>

            <p className="change-method">
                Bạn đã có tài khoản. <Link to="/auth/login">Đăng nhập ngay.</Link>
            </p>
        </Form>
    );
}

export default RegisterForm;

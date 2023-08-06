import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, GroupInput, Social, FieldError } from '../AuthLayout.style';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible, AiOutlineWarning } from 'react-icons/ai';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../../../redux/Slide/AuthSlide';
import { isLoading, isNotLoading } from '../../../../redux/Slide/LoadingSlide';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup.string().required('Username is required.').min(5, 'Tên đăng nhập ít nhất 5 kí tự.'),
    password: yup
        .string()
        .required('Password is required.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password ít nhất 8 ký tự, tồn tại 1 chữ số và một ký tự đặt biệt.',
        ),
});
function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUnauthorized, setUnauthorized] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (values) => {
        dispatch(isLoading);
        await axios
            .post('http://localhost:8080/api/v1/auth/login', values)
            .then((response) => {
                if (response.status === 200) dispatch(loginSuccess(response.data?.content));
                if (response.status === 401) {
                    setUnauthorized(true);
                    return;
                }
                dispatch(isNotLoading);
                navigate('/');
            })
            .catch((error) => {
                dispatch(loginFailure(error));
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
            <p className="heading-l">Login</p>
            <GroupInput>
                <label htmlFor="username">
                    <i>
                        <FaUser />
                    </i>
                    Username
                </label>
                <div className="inputWrap">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.username && formik.errors.username ? (
                    <FieldError>
                        <AiOutlineWarning /> {formik.errors.username}{' '}
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
                    Password
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
            {isUnauthorized && (
                <FieldError>
                    <AiOutlineWarning /> Tài khoản và mật khẩu không đúng.
                </FieldError>
            )}
            <a href="#!" className="foget-password heading-s">
                Quên mật khẩu
            </a>
            <button type="submit" className="submit btn btn-primary" disabled={!formik.isValid}>
                Đăng nhập
            </button>

            <p className="line">or</p>

            <Social>
                <a href="#!" className="btn">
                    <img src="/facebook-logo.svg" alt="" />
                    Đăng nhập bằng facebook
                </a>
                <a href="#!" className="btn">
                    <img src="/google-icon.svg" alt="" />
                    Đăng nhập bằng google
                </a>
            </Social>

            <p className="change-method">
                Bạn chưa có tài khoản. <Link to="/auth/register">Đăng ký tài khoản ngay.</Link>
            </p>
        </Form>
    );
}

export default LoginForm;

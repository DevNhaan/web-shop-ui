import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form, GroupInput, Social } from '../AuthLayout.style';
import { FaUser, FaLock } from 'react-icons/fa';
function LoginForm() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    return (
        <Form id="scrollbar">
            <p className="heading-l">Login</p>
            <GroupInput>
                <label htmlFor="username">
                    <i>
                        <FaUser />
                    </i>
                    Username
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={user.username}
                    placeholder="Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
            </GroupInput>
            <GroupInput>
                <label htmlFor="password">
                    <i>
                        <FaLock />
                    </i>
                    Password
                </label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    value={user.name}
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </GroupInput>
            <a href="#!" className="foget-password heading-s">
                Quên mật khẩu
            </a>
            <button className="submit btn btn-primary">Đăng nhập</button>

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

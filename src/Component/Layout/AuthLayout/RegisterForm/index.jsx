import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form, GroupInput, Social } from '../AuthLayout.style';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function RegisterForm() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        repassword: '',
        firstname: '',
        lastname: '',
        email: '',
    });
    return (
        <Form id="scrollbar">
            <p className="heading-l">Đăng Ký</p>
            <GroupInput>
                <label htmlFor="username">
                    <i>
                        <FaUser />
                    </i>
                    Tên đăng nhập
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
                <label htmlFor="lastname">
                    <i>
                        <FaUser />
                    </i>
                    Họ
                </label>
                <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={user.lastname}
                    placeholder="Lastname"
                    onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                />
            </GroupInput>
            <GroupInput>
                <label htmlFor="firstname">
                    <i>
                        <FaUser />
                    </i>
                    Tên
                </label>
                <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={user.firstname}
                    placeholder="firstname"
                    onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                />
            </GroupInput>
            <GroupInput>
                <label htmlFor="email">
                    <i>
                        <MdEmail />
                    </i>
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={user.email}
                    placeholder="Your email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </GroupInput>
            <GroupInput>
                <label htmlFor="password">
                    <i>
                        <FaLock />
                    </i>
                    Mật khẩu
                </label>
                <input
                    name="password"
                    type="password"
                    value={user.password}
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </GroupInput>
            <GroupInput>
                <label htmlFor="rePassword">
                    <i>
                        <FaLock />
                    </i>
                    Nhập lại mật khẩu
                </label>
                <input
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    value={user.repassword}
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => setUser({ ...user, repassword: e.target.value })}
                />
            </GroupInput>
            <button className="submit btn btn-primary">Đăng ký</button>

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

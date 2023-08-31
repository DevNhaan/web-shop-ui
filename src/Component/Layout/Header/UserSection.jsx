import { UserContainer, Cart, User, CartQuantiy, Dropdown, Like } from './header.style';
import { TiShoppingCart, TiDocumentText } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector, isLogin } from '~/redux/Selector/AuthSelector';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { logout } from '~/Apis/AuthApi';
import { getNumberOfAllItem } from '~/redux/Selector/CartSelector';

function UserSection() {
    const isLoginState = useSelector(isLogin);
    const userDetails = useSelector(currentUserSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfAllItem = useSelector(getNumberOfAllItem);

    const handleLogout = () => {
        logout(dispatch, navigate);
    };
    return (
        <UserContainer className="align-center-flex">
            <Like>
                <Link to={isLoginState ? '/favorite' : '/auth/login'}>
                    <span className="icon">
                        <AiOutlineHeart />
                    </span>
                </Link>
            </Like>
            <Cart>
                <Link to={isLoginState ? '/my-cart' : '/auth/login'}>
                    <span className="icon">
                        <AiOutlineShoppingCart />
                    </span>
                    {isLoginState && numberOfAllItem !== 0 && <CartQuantiy>{numberOfAllItem}</CartQuantiy>}
                </Link>
            </Cart>

            <section className="align-center-flex">
                {isLoginState ? (
                    <Tippy
                        content={
                            <Dropdown>
                                <Link to="/profile">
                                    <FaRegUser /> Thông tin cá nhân
                                </Link>
                                <Link to="/my-order">
                                    <TiDocumentText />
                                    Đơn hàng của tôi
                                </Link>
                                <Link to="/my-cart">
                                    <TiShoppingCart /> Giỏ hàng của tôi
                                </Link>
                                <div onClick={handleLogout}>
                                    <AiOutlineLogout />
                                    Đăng xuất
                                </div>
                            </Dropdown>
                        }
                        theme="light"
                        animation="fade"
                        arrow={true}
                        trigger="mouseenter"
                        interactive={true}
                        placement="bottom"
                    >
                        <User htmlFor="user-dropdown">
                            <span className="icon">
                                <FaRegUser />
                            </span>
                            {userDetails?.displayName}
                        </User>
                    </Tippy>
                ) : (
                    <div className="align-center-flex black-color gap-5">
                        <Link to="/auth/login" className="line-hover line-hover-black">
                            Đăng nhập
                        </Link>
                        /
                        <Link to="/auth/register" className="line-hover line-hover-black">
                            Đăng ký
                        </Link>
                    </div>
                )}
            </section>
        </UserContainer>
    );
}

export default UserSection;

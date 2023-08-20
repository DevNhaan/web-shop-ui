import { UserContainer, Cart, User, CartQuantiy, Dropdown } from './header.style';
import { TiShoppingCart, TiDocumentText } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector, isLogin } from '../../../redux/Selector/AuthSelector';
import Tippy from '@tippyjs/react';
import { logout } from '../../../Apis/AuthApi';

function UserSection() {
    const isLoginState = useSelector(isLogin);
    const userDetails = useSelector(currentUserSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch, navigate);
    };
    return (
        <UserContainer className="align-center-flex">
            <Cart>
                <Link to={isLoginState ? '/my-cart' : '/auth/login'} className="btn btn-outline black-color">
                    <TiShoppingCart />
                    <span>Giỏ Hàng</span>
                    {isLoginState && <CartQuantiy>{}</CartQuantiy>}
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
                        animation="fade"
                        arrow={true}
                        trigger="mouseenter click"
                        interactive={true}
                        placement="bottom"
                    >
                        <User htmlFor="user-dropdown">
                            <FaRegUser />
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

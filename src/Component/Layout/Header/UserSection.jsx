import { UserContainer, Cart, User, CartQuantiy } from './header.style';
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { currentUserSelector, isLogin } from '../../../redux/Selector/AuthSelector';

function UserSection() {
    const isLoginState = useSelector(isLogin);
    const currentUser = useSelector(currentUserSelector);
    console.log({ currentUser });
    console.log('islogin', isLoginState);

    return (
        <UserContainer className="align-center-flex">
            <Cart>
                <Link to="/cart" className="btn btn-outline black-color">
                    <TiShoppingCart />
                    <span>Giỏ Hàng</span>
                    <CartQuantiy>0</CartQuantiy>
                </Link>
            </Cart>

            <section className="align-center-flex">
                <User>
                    <FaRegUser />
                </User>
                {!isLoginState && (
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

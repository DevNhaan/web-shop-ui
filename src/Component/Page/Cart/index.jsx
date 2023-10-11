import { useEffect } from 'react';
import Breadcrumbs from '../../Layout/Breadcrumbs/Breadcrums';
import ItemCart from '../../Layout/ItemCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { memo } from 'react';

const Container = styled.section`
    border-radius: 6px;
    display: flex;
    flex-direction: column;
`;

function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        if (!cart) navigate('/auth/login');
    }, [cart, navigate]);

    return (
        <main className="container">
            <Breadcrumbs />
            {cart?.cartItem.length > 0 ? (
                <Container>
                    <ItemCart />
                </Container>
            ) : (
                <div className="full-vh">Bạn chưa có sản phẩm nào trong giỏ hàng. Mua sắm ngay.</div>
            )}
        </main>
    );
}

export default memo(Cart);

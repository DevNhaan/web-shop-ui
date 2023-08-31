import { useDispatch, useSelector } from 'react-redux';
import './checkedbox.scss';
import Item from './Item';
import {
    getCartItem,
    getCartItemUserSelect,
    getNumberOfItem,
    getPriceSaving,
    getTotal,
} from '../../../redux/Selector/CartSelector';
import { Order, Container, CartItems, Name, Header } from './ItemCart.style';
import { memo, useState } from 'react';
import {
    selectAllCartItem,
    unSelectAllCartItem,
    updateNumberOfItem,
    updateTotal,
    updateTotalOriginal,
} from '../../../redux/Slide/CartSlide';
import { Link } from 'react-router-dom';

function ItemCart() {
    const dispatch = useDispatch();
    const [...items] = useSelector(getCartItem);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const itemUserSelect = useSelector(getCartItemUserSelect);

    const numOfItem = useSelector(getNumberOfItem);
    const total = useSelector(getTotal);
    const priceSaving = useSelector(getPriceSaving);

    const handleChecked = () => {
        setIsCheckedAll(!isCheckedAll);
        if (!isCheckedAll) {
            dispatch(selectAllCartItem());
        } else {
            dispatch(unSelectAllCartItem());
        }
        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());
    };
    return (
        <Container>
            <CartItems>
                <Header className="item">
                    <p>
                        <input
                            type="checkbox"
                            id="checkedAll"
                            checked={isCheckedAll}
                            onChange={() => handleChecked()}
                        />
                        <label htmlFor="checkedAll"></label>
                    </p>
                    <p></p>
                    <Name>
                        <p>Sản phẩm</p>
                    </Name>
                    <p className="quantity">Số Lượng </p>
                    <p className="price">Giá</p>

                    <div className="delte-btn btn btn-s">Xóa</div>
                </Header>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        isCheckedAll={isCheckedAll}
                        itemChecked={itemUserSelect.includes(item.id)}
                    />
                ))}
            </CartItems>

            <Order>
                <p className="heading">Tổng cộng giỏ hàng</p>
                <div className="row">
                    <p>Số lượng sản phẩm</p>
                    <span>{numOfItem || 0}</span>
                </div>
                <div className="row">
                    <p>Tiết kiệm</p>
                    <span>{priceSaving && Number(priceSaving).toLocaleString('en-US')} &#8363;</span>
                </div>
                <div className="row">
                    <p>Tổng thanh toán</p>
                    <span>{total && Number(total).toLocaleString('en-US')} &#8363;</span>
                </div>
                <span className="line"></span>

                {total !== 0 ? (
                    <Link to="/checkout" className="btn btn-primary btn-full">
                        Mua hàng
                    </Link>
                ) : (
                    <div className="primary-color">Chọn sản phẩm để tiến hành mua hàng</div>
                )}
            </Order>
        </Container>
    );
}

export default memo(ItemCart);

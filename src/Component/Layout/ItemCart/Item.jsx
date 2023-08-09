import { RiDeleteBack2Fill } from 'react-icons/ri';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Wrap, QuantityBtn, Name, Price } from './ItemCart.style';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    addItemToCartItemUserSelect,
    removeItemToCartItemUserSelect,
    updateNumberOfItem,
    updateTotal,
    updateTotalOriginal,
} from '../../../redux/Slide/CartSlide';

import { memo } from 'react';
import { getToken } from '../../../redux/Selector/AuthSelector';
import httpRequest from '../../../Apis/request';
import { changeQuantity } from '../../../Apis/CartApi';

function Item({ item, itemChecked }) {
    const dispatch = useDispatch();
    const { id, product, quantity } = item;
    const [isChecked, setIsChecked] = useState(itemChecked);
    const token = useSelector(getToken);
    const isItemInUserSelect = itemChecked;

    useEffect(() => {
        setIsChecked(isItemInUserSelect);
    }, [isItemInUserSelect]);

    const updateStore = () => {
        dispatch(updateNumberOfItem());
        dispatch(updateTotal());
        dispatch(updateTotalOriginal());
    };
    const increaseQtt = () => {
        if (quantity < product.quantity) {
            changeQuantity({ cartItemId: id, type: 'INCREASE' }, dispatch, httpRequest(token));
        }
    };
    const decreaseQtt = () => {
        if (quantity > 0) {
            changeQuantity({ cartItemId: id, type: 'DECREASE' }, dispatch, httpRequest(token));
        }
    };
    const handleChecked = () => {
        if (!isChecked) {
            dispatch(addItemToCartItemUserSelect(id));
        } else {
            dispatch(removeItemToCartItemUserSelect(id));
        }
        updateStore();
        setIsChecked(!isChecked);
    };

    const handleDelete = () => {};
    return (
        <Wrap className={`item ${isChecked && 'active'}`}>
            <p>
                <input type="checkbox" id={id} checked={isChecked} onChange={() => handleChecked()} />
                <label htmlFor={id}></label>
            </p>
            <Link to={`/details/${product.id}`} className="image">
                <img src={product?.images[0].url} alt="sanpham" />
            </Link>

            <Name>
                <Link to={`/details/${product.id}`}>{product.name}</Link>
            </Name>
            <QuantityBtn>
                <button onClick={() => increaseQtt()} className="btn plus-btn" type="button" name="button">
                    <AiOutlinePlus />
                </button>
                <p>{quantity} </p>
                <button onClick={() => decreaseQtt()} className="btn minus-btn" type="button" name="button">
                    <AiOutlineMinus />
                </button>
            </QuantityBtn>

            <Price>{Number(product.price * (1 - product.discount / 100)).toLocaleString('en-US')} &#8363;</Price>

            <div onClick={() => handleDelete()} className="delte-btn btn btn-s">
                <RiDeleteBack2Fill />
            </div>
        </Wrap>
    );
}

export default memo(Item);

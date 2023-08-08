import { RiDeleteBack2Fill } from 'react-icons/ri';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Wrap, QuantityBtn, Name, Price } from './ItemCart.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    increaseQuantityItem,
    descreseQuantityItem,
    setTotal,
    addItemToCartItemUserSelect,
    removeItemToCartItemUserSelect,
    updateNumberOfItem,
} from '../../../redux/Slide/CartSlide';
import { memo } from 'react';

function Item({ item, isCheckedAll, itemChecked }) {
    const dispatch = useDispatch();
    const { id, product, quantity } = item;
    const [isChecked, setIsChecked] = useState(isCheckedAll ? true : itemChecked);

    const updateStore = () => {
        dispatch(updateNumberOfItem());
        dispatch(setTotal());
    };
    const increaseQtt = () => {
        if (quantity < product.quantity) {
            dispatch(increaseQuantityItem(id));
            updateStore();
        }
    };
    const decreaseQtt = () => {
        if (quantity > 0) {
            dispatch(descreseQuantityItem(id));
            updateStore();
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
    return (
        <Wrap className="item">
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

            <div className="delte-btn btn btn-s">
                <RiDeleteBack2Fill />
            </div>
        </Wrap>
    );
}

export default memo(Item);

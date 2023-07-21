import { RiDeleteBack2Fill } from 'react-icons/ri';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Item, QuantityBtn, Name, Price } from './ItemCart.style';
import { useState } from 'react';
function Product({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [isChecked, setIsChecked] = useState(true);
    const increaseQtt = (pQuantity) => {
        if (quantity < pQuantity) setQuantity((prev) => prev + 1);
    };
    const decreaseQtt = () => {
        if (quantity > 0) setQuantity((prev) => prev - 1);
    };
    const handleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Item className="item">
            <p>
                <input type="checkbox" id={product.id} checked={isChecked} onChange={() => handleChecked()} />
                <label htmlFor={product.id}></label>
            </p>
            <div className="image">
                <img src={product?.images[0]} alt="sanpham" />
            </div>

            <Name>{product.name}</Name>
            <QuantityBtn>
                <button
                    onClick={() => increaseQtt(product.quantity)}
                    className="btn plus-btn"
                    type="button"
                    name="button"
                >
                    <AiOutlinePlus />
                </button>
                <input type="text" name="name" value={quantity} onChange={(e) => (product.quantity = e.target.value)} />
                <button onClick={() => decreaseQtt()} className="btn minus-btn" type="button" name="button">
                    <AiOutlineMinus />
                </button>
            </QuantityBtn>

            <Price>{Number(product.price * (1 - product.sale / 100)).toLocaleString('en-US')} &#8363;</Price>

            <div className="delte-btn btn btn-s">
                <RiDeleteBack2Fill />
            </div>
        </Item>
    );
}

export default Product;
